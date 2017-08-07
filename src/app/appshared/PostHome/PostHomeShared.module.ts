

import { NgModule } from '@angular/core';



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
    PostDetailComponent
} from './components';



@NgModule({
    imports: [

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
        PostDetailComponent
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
        PostDetailComponent
    ]

})
export class PostHomeSharedModule {
}
