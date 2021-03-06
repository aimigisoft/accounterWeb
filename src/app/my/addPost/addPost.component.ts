import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PostService } from '../../services/Post';
import { APPCONFIG } from '../../models/config';
//declare $:any;

@Component({
  selector: 'my-blog-add',
  templateUrl: './addPost.component.html'

})
export class AddBlogComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  private editor;
  private UploadUrl = APPCONFIG.UploadUrl+"?author=admin";
  constructor(private blogService: PostService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      title: new FormControl(''),
      subtitle: new FormControl(''),
      content: new FormControl(''),
      source: new FormControl(''),
      tags: new FormControl(''),
      myCategoryId: new FormControl('')
    });
  }

  public fileformsubmit(event){
    let fileInput = <HTMLInputElement>document.getElementById('img_input');

    debugger;
    console.log(event);
    event.preventDefault();
    let file=fileInput.files[0];
    let formData = new FormData();
    formData.append('file', file,file.name);

    let xhr=new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', 'file_upload_URL.php');
    xhr.onload = function() {
        let json;
        if (xhr.status != 200) {
          console.log('HTTP Error: ' + xhr.status);
          return;
        }
        json = JSON.parse(xhr.responseText);
        if (!json || typeof json.data.path != 'string') {
          console.log('Invalid JSON: ' + xhr.responseText);
          return;
        }
        console.log(json.data.path);
        fileInput.value="http://localhost:9090/uploads/"+json.data.path;
    };
    xhr.send(formData);
  }
  public fileInputChangeHandler():void{
    let fileInput = <HTMLInputElement>document.getElementById('img_input');
    let inputValue=fileInput.value;
    console.log(inputValue);
    //https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=986918149,2042207542&fm=58&u_exp_0=419884534,1708902132&fm_exp_0=86&bpow=720&bpoh=1080
    
    if(!inputValue){
      return;
    }
    let f=<HTMLInputElement>document.querySelector(".mce-combobox>.mce-textbox");
    f.value=inputValue;
    //$(".mce-textbox.mce-placeholder").val($("#image").val());
    //提交隐藏的表单，上传文件
    // let fileForm=<HTMLFormElement>document.getElementById('file_upload_form');
    // fileForm.action=this.UploadUrl;
    // // fileForm.onsubmit=this.fileformsubmit;   
    // // fileForm.submit(this.fileformsubmit);
    // fileInput.value='';

   
    // var reader = new FileReader();
    // reader.readAsDataURL(inputValue);
    // reader.onload = function () {
    //   // Note: Now we need to register the blob in TinyMCEs image blob
    //   // registry. In the next release this part hopefully won't be
    //   // necessary, as we are looking to handle it internally.
    //   var id = 'blobid' + (new Date()).getTime();
    //   var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
    //   var base64 = reader.result.split(',')[1];
    //   var blobInfo = blobCache.create(id, file, base64);
    //   blobCache.add(blobInfo);

    //   // call the callback and populate the Title field with the file name
    //   cb(blobInfo.blobUri(), { title: file.name });

    // }; 

}

ngAfterViewInit() {
    /**
     *  【非常重要】
     *  关于TinyMCE的完整文档，请查看这里https://www.tinymce.com/docs/
     */
    tinymce.init({
        selector: '#post_editor',
        skin_url: '/assets/skins/lightgray',
        menubar:false,
        //menubar:false,
        plugins: [
          'advlist autolink lists link image charmap print preview hr anchor pagebreak',
          'searchreplace wordcount visualblocks visualchars code fullscreen',
          'insertdatetime media nonbreaking save table contextmenu directionality',
          'emoticons template paste textcolor colorpicker textpattern  codesample '
        ],
        toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image ',
        toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
        //image_advtab: true,
        codesample_content_css:'/assets/css/prism.css',       
        language_url:'/assets/langs/zh_CN.js',
        file_browser_callback_types: 'image',
        file_browser_callback: function(field_name, url, type, win) {
          console.log(type);
          console.log(type=='image');
          if(type=='image'){
              let event = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': true
              });
              let fileInput = document.getElementById('img_input');
              fileInput.dispatchEvent(event);
          } 
        },
        //文件和图片上传相关的选项
        // 
        // images_upload_url: 'php.php',
        // file_browser_callback_types: 'image',
        // // we override default upload handler to simulate successful upload
        // images_upload_handler: function (blobInfo, success, failure) {
        //   setTimeout(function() {
        //     // no matter what you upload, we will turn it into TinyMCE logo :)
        //     success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
        //   }, 2000);
        // },
        
        // init_instance_callback: function (ed) {
        //   //ed.execCommand('mceImage');
        // },
        setup: editor => {
          this.editor = editor;
          editor.on('keyup', () => {
              const content = editor.getContent();
              console.log(content);
          });
        }
      });
}

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
  btnSubmit() {
    console.log(this.form.value);
    this.form.value.content = this.editor.getContent();

    this.blogService.save(this.form.value).subscribe(res => {
      if (res.msg == "0") {
        this.router.navigate(['/my/blog/admin']);
      }
    })
  }
}