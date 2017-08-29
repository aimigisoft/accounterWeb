import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule} from '@angular/router';
import{TabsetConfig} from './components';

import {
    CommentRankComponent,
    NewestCommentComponent,
    PostCalendarComponent,
    PostSearchComponent,
    PostsRecordsComponent,
    PostUserProfileComponent,
    ReadRankComponent,
    RecommendRankComponent,
    UserPostCategoryComponent,
    UserPostTagsComponent,
    UsuallyLinksComponent,
    PostDetailComponent,
    PostInfoBlockComponent,
    WebPostCategoryComponent,
    BlogSummaryListComponent,
    ContactUsComponent,
    ExpertRankComponent,
    KnowledgeBaseRankComponent,
    TabDirective,
    TabsetComponent,
    RouterNavComponent

} from './components';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CommentRankComponent,
        NewestCommentComponent,
        PostCalendarComponent,
        PostSearchComponent,
        PostsRecordsComponent,
        PostUserProfileComponent,
        ReadRankComponent,
        RecommendRankComponent,
        UserPostCategoryComponent,
        UserPostTagsComponent,
        UsuallyLinksComponent,
        PostDetailComponent,
        PostInfoBlockComponent,
        WebPostCategoryComponent,
        BlogSummaryListComponent,
        ContactUsComponent,
        ExpertRankComponent,
        KnowledgeBaseRankComponent,
        TabDirective,
        TabsetComponent,
        RouterNavComponent
    
    ],
    exports: [
        CommentRankComponent,
        NewestCommentComponent,
        PostCalendarComponent,
        PostSearchComponent,
        PostsRecordsComponent,
        PostUserProfileComponent,
        ReadRankComponent,
        RecommendRankComponent,
        UserPostCategoryComponent,
        UserPostTagsComponent,
        UsuallyLinksComponent,
        PostDetailComponent,
        PostInfoBlockComponent,
        WebPostCategoryComponent,
        BlogSummaryListComponent,
        ContactUsComponent,
        ExpertRankComponent,
        KnowledgeBaseRankComponent,
        TabsetComponent,
        TabDirective,
        RouterNavComponent
    ]

})
export class PostHomeSharedModule {

    public static forRoot(): ModuleWithProviders {
        return {
          ngModule: PostHomeSharedModule,
          providers: [TabsetConfig]
        };
      }
}
