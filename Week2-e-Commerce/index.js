
function openMenu () {
    document.body.classList += " menu--open"
}

function closeMenu () {
   document.body.classList.remove("menu--open")
    
}


const ngrok = require("@ngrok/ngrok");

(async function () {
	const listener = await ngrok.forward({
		addr: 8080,
		authtoken_from_env: true,
	});

	console.log(`Ingress established at: ${listener.url()}`);
})();