// ============================================
// TERMINAL — Hero typing animation
// ============================================

export function initTerminal() {
  const terminalBody = document.getElementById('terminal-body');
  if (!terminalBody) return;

  const lines = [
    { prompt: '$ whoami', output: 'Ankit Kumar' },
    { prompt: '$ cat role.txt', output: 'Software Engineer I @ Celigo' },
    { prompt: '$ echo $PASSION', output: 'Building reliable distributed systems' },
    { prompt: '$ ls skills/', output: 'node.js  python  docker  kafka  redis  sql' },
  ];

  let lineIndex = 0;

  async function typeLine(text, element, speed = 40) {
    for (let i = 0; i < text.length; i++) {
      element.textContent += text[i];
      await delay(speed + Math.random() * 20); // natural variance
    }
  }

  async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function runSequence() {
    for (const line of lines) {
      // Create prompt line
      const promptLine = document.createElement('div');
      promptLine.className = 'terminal-prompt';
      terminalBody.appendChild(promptLine);
      await typeLine(line.prompt, promptLine, 50);

      await delay(350);

      // Create output line
      const outputLine = document.createElement('div');
      outputLine.className = 'terminal-output';
      terminalBody.appendChild(outputLine);
      await typeLine(line.output, outputLine, 25);

      await delay(500);
    }

    // Add final prompt with blinking cursor
    const finalPrompt = document.createElement('div');
    finalPrompt.className = 'terminal-prompt';
    finalPrompt.innerHTML = '$ <span class="terminal-cursor">█</span>';
    terminalBody.appendChild(finalPrompt);
  }

  // Start animation after a small initial delay
  setTimeout(() => runSequence(), 800);
}
