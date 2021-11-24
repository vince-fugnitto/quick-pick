import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('quick-pick.test', async () => {
		const items = ['a', 'b', 'c', 'd'];
		const result = await vscode.window.showQuickPick(items);
		vscode.window.showInformationMessage(`Result: ${result}`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
