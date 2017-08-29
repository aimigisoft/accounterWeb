import{Component ,OnInit,HostListener} from '@angular/core';

@Component({
    selector:"my-usercenter",
    templateUrl:"./usercenter.component.html"
})
export class MyUserCenterComponent  implements OnInit{
    ngOnInit(){}

    showInfoEdit:boolean=false;
    showImgEdit:boolean=false;

    onHoverItem(event){
        this.showInfoEdit=true;
    }
    onLeaveItem(event){
        this.showInfoEdit=false;
    }

    onHoverImg(event){
        this.showImgEdit=true;
    }
    onLeaveImg(event){
        this.showImgEdit=false;
    }



    editPersonInfo(){
        alert('編輯人員信息！');
    }
    editPersonPhoto(){
        alert('編輯人員照片信息！')
    }
}