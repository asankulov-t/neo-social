import React, {ChangeEvent, useState} from 'react';

type ProfileStatusType={
    status:string|null,
    updateSt:(status:string|null)=>void
}

const ProfileStatus = (props:ProfileStatusType) => {
    const [editMode,setEditMode]=useState(false)
    const [status,setStatus]=useState<string|null>(props.status?props.status:'')
    let activeMode=()=>{
        setEditMode(true)
    }
    let deActiveMode=()=>{
        setEditMode(false)
        props.updateSt(status)
        setStatus('')
    }
    const changeStatus=(e:ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value);
    }
    // @ts-ignore
    return (
        <div>
            {!editMode&&<p onDoubleClick={activeMode}>{props.status?props.status:'empty status'}</p>}
            {editMode&&<input onChange={(e)=>changeStatus(e)} onBlur={deActiveMode} className="form-control"
                              type="text" value={status?status:'empty status'}
                              />}
        </div>
    );
};

export default ProfileStatus;