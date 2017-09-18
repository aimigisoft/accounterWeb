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
    RouterNavComponent,
    NavMenuComponent,
    NavMenuItemComponent

} from './components';



@NgModule({
    imports: [
        CommonModule,
        RouterModule

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
        RouterNavComponent,
        NavMenuComponent,
        NavMenuItemComponent
    
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
        RouterNavComponent,
        NavMenuComponent,
        NavMenuItemComponent
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
