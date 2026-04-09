let API_URL;

if (window.location.hostname.includes("develop")) {
  API_URL = "https://blog-project-092w.onrender.com";
} else {
  API_URL = "https://new-blog-project-h2m6.onrender.com";
}

const BLOG_ENDPOINTS = {
  registerUrl: `${API_URL}/api/auth/register`,
  loginUrl: `${API_URL}/api/auth/login`
};


window.BLOG_ENDPOINTS = BLOG_ENDPOINTS;

