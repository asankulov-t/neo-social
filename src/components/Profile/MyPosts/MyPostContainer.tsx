import {addPostAC} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import { useDispatch, useSelector} from "react-redux";
import {StateData} from "../../../types/Types";


// type myPostContainerTypes={
//     dispatch:(action: ActionType) => void
//     postData:Array<PostType>
//     newPostText:string
// }


// const MyPostContainer = (props:myPostContainerTypes) => {
//     const addPost = () => {
//         if (props.newPostText !== '') {
//             props.dispatch(addPostAC(props.newPostText))
//             console.log(props.postData)
//         }
//
//     }
//     const onChangeHendler = (e: string) => props.dispatch(changePostTextAC(e))
//     return (<MyPosts newPostText={props.newPostText}
//                      onChangeText={onChangeHendler}
//                      addPost={addPost}
//                      postData={props.postData}
//         />
//     );
// };

// let mapStateToProps=(state:StateData)=>{
//     console.log(state)
//     return{
//         postData:state.profileReducer.posts,
//         newPostText:state.profileReducer.newPostText
//     }
// }
// let mapDispatchToProps=(dispatch:any)=>{
//     return{
//         onChangeText:(e:string)=>{dispatch(changePostTextAC(e))},
//         addPost:(e:string)=>{dispatch(addPostAC(e))}
//     }
// }
//
//
// const MyPostContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);
//
// export default MyPostContainer;

import React from 'react';

const MyPostContainer = () => {
    let postData=useSelector((state:StateData)=>state);
    let dis=useDispatch();
    let addPost=(e:string)=>{
        dis(addPostAC(e))
    }
    return <MyPosts postData={postData.profileReducer.posts} addPost={addPost} />
};

export default MyPostContainer;