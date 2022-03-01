//const backend_url = "https://cantiin.com/hgjhgjhgjh/";
const backend_url = "https://cantiin.com/";
//const backend_url = "http://127.0.0.1:8000/";
const frontend_url = "/";


const products_list_function_backend = (page=null) =>
{
	if(page==null){return backend_url+"api/products/";}
	return backend_url+"api/products/?page="+page;
};



const backend_urls = 
{
	"products":
    {
    	"list": products_list_function_backend
    },
	"auth":
    {
    	"signup":backend_url+"api/auth/custom/signup/",
    	"login":backend_url+"api/auth/custom/login/",
    	"user":backend_url+"api/auth/custom/user/",
    	"logout":backend_url+"api/auth/custom/logout/",
    }

};





const products_list_function_frontend = (page=null) =>
{
	if(page==null){return frontend_url+"products";}
	return frontend_url+"products?page="+page;
};





const frontend_urls = 
{
	"home": "/",
	"products":
    {
    	"list": products_list_function_frontend
    },
	"auth":
    {
    	"login":frontend_url+"login",
    	"signup":frontend_url+"signup",
    	"logout":frontend_url+"logout",
    }
};



const defaultPerPage = 10;



const settings={
	backend_urls: backend_urls,
	frontend_urls: frontend_urls,
	defaultPerPage:defaultPerPage
};




export {settings};

