import type { Actions, PageServerLoad } from "./$types";

export const actions:Actions={


    submit: async({request,cookies})=>{
        
        const data=await request.formData()
        const credentials={
            email:data.get('email'),
            password:data.get('password'),
        }
    console.log(credentials)
    }
}