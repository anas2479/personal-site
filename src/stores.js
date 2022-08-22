import { writable } from "svelte/store";



export let projects = writable([
    {
        title: 'Form Chimp',
        description: 'A platform that allows you to build web forms without worrying about writing server code.',
        url:'https://anasweb.notion.site/Form-Chimp-A-Project-By-Anas-Mohamed-3b68631525774aba97786a219f0005ea',

    },
    {
        title: `End-Qabyaalad`,
        description:`Creating social awareness and education campaigns about the disadvantages and backwardness of the patrimonial system of Clannism (Qabyaalad).`,
        url:`https://anasweb.notion.site/End-Qabyaalad-38929ef4860148878121d18f1c2aaec8`
    },
    {
        title: "Shell Ninja",
        description:"A web-based interactive tutorial that is designed to teach beginners the basics of using shell programs.",
        url:"https://anasweb.notion.site/Shell-Ninja-1647c30a30ec44d2848738613327a5c1"
    }
])
