
const app = document.getElementById('app');

const fallacies = [

    { title: 'Ad Hominem', desc: 'Переход на личности вместо обсуждения аргумента.' },

    { title: 'Straw Man', desc: 'Искажение аргумента оппонента, чтобы его было легче атаковать.' },

    { title: 'Slippery Slope', desc: 'Утверждение, что небольшое событие неизбежно приведет к катастрофе.' }

];



app.innerHTML = fallacies.map(f => `

    <div class="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50">

        <h3 class="text-xl font-bold text-purple-400">${f.title}</h3>

        <p class="text-zinc-400 mt-2">${f.desc}</p>

    </div>

`).join('');

