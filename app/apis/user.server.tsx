
export const apiUrl="http://159.75.212.177:83";


export interface LoginModel{
    account:string,
    password:string
}

declare type BaseModel={
    token:string
}

declare type UserSearchModel={
    token:string,
    userName:string|undefined,
    companyId:Number,
    page:Number,
    rows:Number
}

export async function login(form:LoginModel)
{

  


   var res= await fetch(`${apiUrl}/api/v1/Account/login`,{
        body:JSON.stringify({
            userName:form.account,
            password:form.password
        }),
        method:'post',
        headers:{
            "Content-Type": "application/json",
        }
    });
 
    var result= await res.json();
    return result;
}


export async function getProfile(model:BaseModel){

 

    var res= await fetch(`${apiUrl}/api/v1/Account/profile`,{
        method:'get',
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${model.token}`,
        }
    });
    console.log(res)
    var result= await res.json();
    if(result.code==0){
        return result.data;
    }
    else{
        throw new Error("profile error");
    }

}

export async function getUsers( model:UserSearchModel){
    // await new Promise(function(resolve){
    //     setTimeout(() => {
    //         resolve(1);
    //     }, 2000);
    // });

    var res= await fetch(`${apiUrl}/api/v1/Account/users`,{
        method:'post',
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${model.token}`,
        },
       body:JSON.stringify(model)
    });

    var result= await res.json();
    if(result.code==0){
        return result.data;
    }
    else{
        throw new Error("user error");
    }

}

