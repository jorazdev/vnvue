
export default function useForm() {

    const formData = (form: any, data: any) => {
        const res = {}
        const keys = Object.keys(form)
        keys.forEach(key => {
            res[key] = data[key];
        })
        return res
    }

    const clearForm = (form: any) => {
        const keys = Object.keys(form)
        keys.forEach(key => {
            switch(typeof form[key]){
                case 'number':
                    form[key] = 0
                    break
                case 'string':
                    form[key] = ''
                    break
            }
        })
        return form
    }

    return {
        formData,
        clearForm
    }
}