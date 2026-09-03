

const scriptsInEvents = {

	async EventosSplash_Event3(runtime, localVars)
	{
		runtime.addEventListener("mousedown", () => {
			
			const MeuBotao = runtime.objects.BotaoSkip.getFirstInstance();
			
			const mouseX = runtime.mouse.getMouseX();
			const mouseY = runtime.mouse.getMouseY();
		
			if (MeuBotao.containsPoint(mouseX, mouseY)) {
				
				runtime.goToLayout("Selecao");
			}
		});
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
