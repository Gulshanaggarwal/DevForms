import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState={
    list: {
        projects:[]
    }
    ,
    IsLoading:false
}

export const getForms=createAsyncThunk(
    'Forms/getForms',
    async(data,dispatch)=>{
        const response=await fetch("https://devformms.herokuapp.com/create-form",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        return response.json();
    }
)


export const FormSlice=createSlice({
    name:"Forms",
    initialState,
    reducers:{
        ModifyList:(state,{payload})=>{
           
            state.list=payload;
            
        },
        ModifyFormName:(state,{payload})=>{

          const {NewFormName,FormId}=payload;
          let copyIndex;

          state.list.projects.forEach((ele,index)=>{
              if(ele._id===FormId){
                  copyIndex=index;
              }
          })

          state.list.projects[copyIndex].formName=NewFormName;
          
           
        },

        ModifyTargetEmail:(state,{payload})=>{

            const {NewTargetEmail,FormId}=payload;

            let copyIndex;

          state.list.projects.forEach((ele,index)=>{
              if(ele._id===FormId){
                  copyIndex=index;
              }
          })

          state.list.projects[copyIndex].targetEmail=NewTargetEmail;



        },
        ModifyEnableSetting:(state,{payload})=>{

            const {FormId,NewEnableSetting}=payload;
            let copyIndex;

            state.list.projects.forEach((ele,index)=>{
                if(ele._id===FormId){
                    copyIndex=index;
                }
            })
  
            state.list.projects[copyIndex].isEnabled=NewEnableSetting;
        },

    },
    extraReducers:{

        [getForms.pending]:(state,action)=>{
            state.IsLoading=true
        },
        [getForms.fulfilled]:(state,{payload})=>{
            state.list=payload.result;
            state.IsLoading=false
        },
        [getForms.rejected]:(state,action)=>{
            state.IsLoading=false
        }

    }
})

export const {ModifyList,ModifyFormName,ModifyTargetEmail,ModifyEnableSetting}=FormSlice.actions;
