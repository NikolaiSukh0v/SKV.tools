import methods from "../data/methods.json";
export function appendTooltip(currentTopic) {
  const toolTip = `<div class="absolute left-55 top-40 z-50">
    <div class="w-64 h-80 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl shadow-2xl shadow-cyan-500/20">

      <div class="h-full overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-cyan-500/40 scrollbar-track-transparent">

          <h2 class="font-jetbrains text-xs font-bold uppercase tracking-widest text-cyan-400 opacity-80 mb-4">
            ${currentTopic}
          </h2>

          <div class="Methods-for-topic flex flex-col gap-1">
             </div>

      </div>
    </div>
  </div>`;
  let e = document.querySelector(`#${currentTopic}`);
  const themeBlockClass = document.querySelector("theme-block");
  if (themeBlockClass.classList.contains("open") && themeBlockClass.id) {
    console.log(e);
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("tooltip-wrapper");
    divWrapper.dataset.topic = currentTopic;
    divWrapper.innerHTML = toolTip;
    e.append(divWrapper);
    let findCurrentMethod = (e) => {
      if (e.topic === currentTopic) {
        return e.methods;
      }
    };
    let methodsForTops;
    methods.find((e) => {
      const result = findCurrentMethod(e);
      if (result) {
        return (methodsForTops = result);
      }
    });

    const methodsInHtml = document.querySelector(".Methods-for-topic");
    //devouncemethods
    // console.log(methodsForTops);
    methodsForTops.forEach((e) => {
      console.log(e.name);
      const appendMethodName = document.createElement("div");
      appendMethodName.innerHTML = `
        <h2>${e.name}</h2>
        `;
      methodsInHtml.append(appendMethodName);
    });
  } else {
    methodsInHtml.innerHTML = "";
  }
}
