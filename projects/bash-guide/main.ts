
const app = document.getElementById('app');

const tips = [

    { cmd: 'ls -la', desc: 'Показать все файлы, включая скрытые' },

    { cmd: 'grep -r "text" .', desc: 'Рекурсивный поиск текста в файлах' },

    { cmd: 'chmod +x script.sh', desc: 'Сделать файл исполняемым' },

    { cmd: 'cat <<EOF > file', desc: 'Запись многострочного текста (как мы сейчас!)' }

];



app.innerHTML = tips.map(t => `

    <div class="p-4 border border-zinc-800 rounded bg-zinc-900">

        <code class="text-emerald-400">${t.cmd}</code>

        <p class="text-zinc-400 text-sm mt-1">${t.desc}</p>

    </div>

`).join('');

