// Variáveis globais
let caixaTexto;
let botao;
let blocoCodigo;
let resultadoPreview;

const sugestoesPrincipais = [
    "bola azul quicando",
    "botão hover",
    "texto gradiente",
    "gradiente fundo",
    "sombra profunda",
    "cartão moderno",
    "efeito vidro",
    "padrão xadrez",
    "rotação infinita",
    "cubo 3d"
];

// Biblioteca EXPANDIDA de estilos CSS predefinidos
const estilosPredefinidos = {
    // ANIMAÇÕES BÁSICAS
    "bola azul quicando": {
        descricao: "Bola azul que quica infinitamente",
        css: `width: 50px; height: 50px; background: radial-gradient(circle at 30% 30%, #4a9eff, #0066cc); border-radius: 50%; animation: quicar 0.6s infinite; box-shadow: 0 10px 20px rgba(0, 102, 204, 0.4);`
    },
    "quadrado girando": {
  descricao: "Quadrado azul que gira infinitamente",
        css: `width: 80px; height: 80px; background: linear-gradient(135deg, #0066cc, #4a9eff); animation: girar 2s infinite linear; box-shadow: 0 0 20px rgba(0, 102, 204, 0.6);`
    },
    "bola pulsante": {
        descricao: "Bola que pulsa de tamanho",
        css: `width: 60px; height: 60px; background: radial-gradient(circle at 35% 35%, #ff6b6b, #ee5a6f); border-radius: 50%; animation: pulsar 1.5s infinite; box-shadow: 0 0 20px rgba(255, 107, 107, 0.8);`
    },
    "onda de movimento": {
        descricao: "Efeito de onda",
        css: `width: 80px; height: 80px; background: linear-gradient(45deg, #00d4ff, #0066cc); border-radius: 50%; animation: onda 1.5s infinite;`
    },
    "ondulação": {
        descricao: "Efeito de ondulação contínua",
        css: `width: 100px; height: 100px; background: #4a9eff; clip-path: polygon(0 45%, 15% 44%, 32% 50%, 54% 42%, 70% 45%, 88% 48%, 100% 52%, 88% 60%, 69% 58%, 50% 65%, 32% 62%, 15% 65%, 0 60%); animation: ondular 1.5s ease-in-out infinite;`
    },
    
    // EFEITOS HOVER
    "botão hover": {
        descricao: "Botão com efeito ao passar o mouse",
        css: `padding: 15px 30px; background: #22c55e; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);`
    },
    "escala ao hover": {
        descricao: "Elemento que cresce ao passar mouse",
        css: `width: 80px; height: 80px; background: #22c55e; border-radius: 10px; transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);`
    },
    "sombra hover": {
        descricao: "Elemento que ganha sombra ao passar mouse",
        css: `width: 100px; height: 100px; background: #667eea; border-radius: 12px; transition: box-shadow 0.3s ease, transform 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);`
    },

    // EFEITOS DE TEXTO
    "texto gradiente": {
        descricao: "Texto com gradiente colorido",
        css: `font-size: 32px; font-weight: bold; background: linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;`
    },
    "texto brilhante": {
        descricao: "Texto que brilha",
        css: `font-size: 24px; font-weight: bold; color: #ffff00; text-shadow: 0 0 10px #ff00ff, 0 0 20px #00ffff; animation: brilhar 1s ease-in-out infinite;`
    },
    "texto sombra": {
        descricao: "Texto com sombra profunda",
        css: `font-size: 28px; font-weight: bold; color: #fafafa; text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7), -1px -1px 2px rgba(255, 255, 255, 0.3);`
    },
    "texto neon": {
        descricao: "Texto com efeito neon",
        css: `font-size: 24px; font-weight: bold; color: #00ff00; text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;`
    },

    // GRADIENTES
    "gradiente fundo": {
        descricao: "Fundo com gradiente bonito",
        css: `background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); width: 100%; height: 100%;`
    },
    "transição suave": {
        descricao: "Cor que muda suavemente",
        css: `width: 100px; height: 100px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b); background-size: 200% 200%; animation: mudaCor 5s ease infinite; border-radius: 20px;`
    },
    "gradiente espelhado": {
        descricao: "Gradiente espelhado multicolorido",
        css: `width: 120px; height: 120px; background: linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #0080ff); border-radius: 15px;`
    },

    // SOMBRAS E PROFUNDIDADE
    "sombra flutuante": {
        descricao: "Elemento que flutua com sombra",
        css: `padding: 20px; background: white; border-radius: 15px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); animation: flutuar 2s ease-in-out infinite;`
    },
    "sombra profunda": {
        descricao: "Sombra profunda e dramática",
        css: `width: 100px; height: 100px; background: #22c55e; border-radius: 10px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.1);`
    },
    "sombra interna": {
        descricao: "Sombra interna (inset)",
        css: `width: 100px; height: 100px; background: #667eea; border-radius: 10px; box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3), inset 0 -2px 10px rgba(255, 255, 255, 0.3);`
    },

    // EFEITOS NEON E BRILHO
    "efeito neon": {
        descricao: "Efeito neon brilhante",
        css: `padding: 20px; color: #00ff00; background: #000; border: 2px solid #00ff00; border-radius: 10px; box-shadow: 0 0 10px #00ff00, inset 0 0 10px #00ff00; font-weight: bold;`
    },
    "neon rosa": {
        descricao: "Neon rosa vibrante",
        css: `width: 100px; height: 100px; background: rgba(0, 0, 0, 0.8); border: 2px solid #ff006e; border-radius: 15px; box-shadow: 0 0 20px #ff006e, inset 0 0 20px rgba(255, 0, 110, 0.2);`
    },
    "neon azul": {
        descricao: "Neon azul cibernetico",
        css: `width: 100px; height: 100px; background: rgba(0, 0, 0, 0.8); border: 2px solid #00d4ff; border-radius: 15px; box-shadow: 0 0 20px #00d4ff, inset 0 0 20px rgba(0, 212, 255, 0.2);`
    },

    // CARTÕES E CONTAINERS
    "cartão moderno": {
        descricao: "Cartão com design moderno",
        css: `width: 200px; padding: 30px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 20px; box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4); color: white; text-align: center;`
    },
    "cartão simples": {
        descricao: "Cartão simples e elegante",
        css: `width: 150px; padding: 20px; background: white; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); text-align: center;`
    },
    "cartão com borda": {
        descricao: "Cartão com borda colorida",
        css: `width: 150px; padding: 20px; background: #f5f5f5; border-radius: 10px; border-left: 4px solid #22c55e; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);`
    },

    // ARCOS E FORMAS ESPECIAIS
    "arco-íris": {
        descricao: "Bordas com cores do arco-íris",
        css: `width: 100px; height: 100px; border: 4px solid transparent; border-radius: 50%; background: linear-gradient(white, white) padding-box, linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red) border-box; animation: girar 3s linear infinite;`
    },
    "espiral giratória": {
        descricao: "Padrão que gira em espiral",
        css: `width: 80px; height: 80px; border: 4px dashed #0066cc; border-radius: 50%; animation: girar 2s linear infinite; box-shadow: inset 0 0 20px rgba(0, 102, 204, 0.3);`
    },
    "circulo pulse": {
        descricao: "Círculo com múltiplos pulsos",
        css: `width: 60px; height: 60px; border-radius: 50%; background: #00d4ff; animation: pulsar 1.5s infinite; box-shadow: 0 0 20px #00d4ff;`
    },

    // 3D E PERSPECTIVA
    "cubo 3d": {
        descricao: "Efeito de perspectiva 3D",
        css: `width: 80px; height: 80px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 10px; transform: perspective(1000px) rotateX(20deg) rotateY(20deg); box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.3);`
    },
    "flip 3d": {
        descricao: "Efeito de virada 3D",
        css: `width: 100px; height: 100px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 10px; transform: perspective(600px) rotateY(45deg); transition: transform 0.6s;`
    },

    // PADRÕES
    "padrão xadrez": {
        descricao: "Padrão em xadrez",
        css: `width: 100px; height: 100px; background: linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc); background-size: 20px 20px; background-position: 0 0, 10px 10px; background-color: white;`
    },
    "padrão listras": {
        descricao: "Padrão com listras",
        css: `width: 100px; height: 100px; background: repeating-linear-gradient(45deg, #667eea, #667eea 10px, #764ba2 10px, #764ba2 20px);`
    },
    "padrão dots": {
        descricao: "Padrão com pontos",
        css: `width: 100px; height: 100px; background: radial-gradient(circle, #0066cc 20%, transparent 20%); background-size: 15px 15px; background-color: white;`
    },

    // MAIS ANIMAÇÕES
    "rotação infinita": {
        descricao: "Rotação contínua infinita",
        css: `width: 80px; height: 80px; background: conic-gradient(from 0deg, #ff0080, #ff8c00, #40e0d0, #0080ff, #ff0080); border-radius: 50%; animation: girar 4s linear infinite;`
    },
    "bounce infinito": {
        descricao: "Bounce infinito para cima e para baixo",
        css: `width: 50px; height: 50px; background: #22c55e; border-radius: 5px; animation: quicar 0.8s ease-in-out infinite;`
    },
    "fade in out": {
        descricao: "Desvanecimento contínuo",
        css: `width: 100px; height: 100px; background: #667eea; border-radius: 15px; animation: brilhar 2s ease-in-out infinite;`
    },
    "deslizar": {
        descricao: "Efeito de deslizamento",
        css: `width: 100px; height: 100px; background: linear-gradient(90deg, #ff0080, #ff8c00); border-radius: 10px; animation: deslizar 3s ease-in-out infinite;`
    },
    "rotação lenta": {
        descricao: "Rotação lenta e suave",
        css: `width: 80px; height: 80px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 15px; animation: girar 8s linear infinite;`
    },

    // MAIS EFEITOS
    "brilho radiante": {
        descricao: "Brilho radiante ao redor",
        css: `width: 80px; height: 80px; background: #ffff00; border-radius: 50%; box-shadow: 0 0 20px #ffff00, 0 0 40px #ff8800, 0 0 60px #ff0000;`
    },
    "efeito vidro": {
        descricao: "Efeito de vidro frosted",
        css: `width: 150px; height: 150px; background: rgba(255, 255, 255, 0.1); border-radius: 15px; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);`
    },
    "estilo minimalista": {
        descricao: "Design minimalista simples",
        css: `width: 120px; height: 120px; background: white; border: 2px solid #333; border-radius: 8px; transition: all 0.3s;`
    },
    "estilo geométrico": {
        descricao: "Forma geométrica moderna",
        css: `width: 100px; height: 100px; background: linear-gradient(45deg, #667eea 50%, #764ba2 50%); clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);`
    }
};

async function gerarCSS() {
    const descricao = caixaTexto.value.trim().toLowerCase();

    if (!descricao) {
        blocoCodigo.textContent = "❌ Por favor, descreva o que você quer estilizar!";
        return;
    }

    botao.disabled = true;
    botao.textContent = "⏳ Procurando...";

    try {
        let cssEncontrado = null;
        let nomeEstilo = "";

        // Procurar por correspondência exata ou parcial
        for (const [nome, estilo] of Object.entries(estilosPredefinidos)) {
            if (descricao === nome || nome.includes(descricao) || descricao.includes(nome.split(" ")[0])) {
                cssEncontrado = estilo.css;
                nomeEstilo = nome;
                break;
            }
        }

        if (!cssEncontrado) {
            const listaEstilos = Object.keys(estilosPredefinidos).map(e => `• ${e}`).join('<br>');
            blocoCodigo.innerHTML = `<strong>❌ Estilo não encontrado!</strong><br><br><strong>Estilos disponíveis (${Object.keys(estilosPredefinidos).length}):</strong><br><br>${listaEstilos}`;
            return;
        }

        // Aplicar o CSS no preview
        aplicarCSSNoPreview(cssEncontrado);

        // Mostrar o CSS de forma legível
        const cssFormatado = cssEncontrado.split(';').filter(p => p.trim()).map(p => p.trim() + ';').join('\n');
        blocoCodigo.innerHTML = `<strong>✅ ${nomeEstilo.toUpperCase()}</strong><br><br><code>${cssFormatado}</code>`;

    } catch (erro) {
        console.error("Erro:", erro);
        blocoCodigo.textContent = `❌ Erro: ${erro.message}`;
    } finally {
        botao.disabled = false;
        botao.textContent = "Gerar CSS ⚡️";
    }
}

function aplicarCSSNoPreview(css) {
    // Remover estilos anteriores
    const estiloAntigo = document.getElementById("estilo-dinamico");
    if (estiloAntigo) {
        estiloAntigo.remove();
    }

    // Criar novo estilo
    const estilo = document.createElement("style");
    estilo.id = "estilo-dinamico";
    estilo.textContent = `
        @keyframes quicar {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-60px); }
        }
        @keyframes girar {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes pulsar {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }
        @keyframes gradientShift {
            0%, 100% { filter: hue-rotate(0deg); }
            50% { filter: hue-rotate(30deg); }
        }
        @keyframes flutuar {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        @keyframes brilhar {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }
        @keyframes onda {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        @keyframes mudaCor {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        @keyframes ondular {
            0%, 100% { clip-path: polygon(0 45%, 15% 44%, 32% 50%, 54% 42%, 70% 45%, 88% 48%, 100% 52%, 88% 60%, 69% 58%, 50% 65%, 32% 62%, 15% 65%, 0 60%); }
            50% { clip-path: polygon(0 50%, 15% 60%, 32% 45%, 54% 55%, 70% 50%, 88% 45%, 100% 50%, 88% 55%, 69% 45%, 50% 60%, 32% 50%, 15% 55%, 0 50%); }
        }
        @keyframes deslizar {
            0%, 100% { transform: translateX(-100px); }
            50% { transform: translateX(100px); }
        }
        .elemento-preview { ${css} }
    `;
    document.head.appendChild(estilo);
}

// Inicializar quando o DOM está carregado
document.addEventListener('DOMContentLoaded', function() {
    caixaTexto = document.querySelector('.caixa-texto');
    botao = document.querySelector('.botao-gerar');
    blocoCodigo = document.getElementById('bloco-codigo');
    resultadoPreview = document.getElementById('resultado-preview');

    if (botao) {
        botao.addEventListener('click', gerarCSS);
    }

    criarSugestoes();

    // Permitir gerar com Enter
    if (caixaTexto) {
        caixaTexto.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && event.ctrlKey) {
                gerarCSS();
            }
        });
    }
});

function criarChip(texto) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip-sugestao';
    chip.textContent = texto;
    chip.addEventListener('click', () => {
        caixaTexto.value = texto;
        gerarCSS();
    });
    return chip;
}

function criarSugestoes() {
    const container = document.getElementById('sugestoes-chips');
    if (!container) return;

    sugestoesPrincipais.forEach(texto => container.appendChild(criarChip(texto)));
    sugestoesPrincipais.forEach(texto => container.appendChild(criarChip(texto)));
}
