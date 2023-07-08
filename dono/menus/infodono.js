const infodono = (prefix, numerodn, NomeDoBot, sender) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return`
🍊𝐀𝐓𝐄𝐍𝐃𝐈𝐌𝐄𝐍𝐓𝐎🍊
╭───────────────┐
├ 🍎⃟༻INFORMAÇÕES DO mestre𑆵
├───────────────
│  🇧🇷⃟𒊹Solicitou o CMD: @${sender.split("@")[0]}
├───────────────┐
│  🔱⃟𒊹Mestre: wa.me/${numerodn} 
╞───────────────┘
╰──────────┐
╭──────────┴─┐
│  🇧🇷⃟𒊹INFORMAÇÕES DO BOT𑆵
├────────────
│ 🇧🇷⃟𒊹Prefixo: ⩺ ${prefix}
│ 🇧🇷⃟𒊹Nome: ⩺ ${NomeDoBot} 
╰─────────────╯
`
}

exports.infodono = infodono
