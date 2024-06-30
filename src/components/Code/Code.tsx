import React, {useState} from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

export interface CodeProps {
	code: string;
	language: string;
	showLineNumbers: boolean
}

export default function MyCoolCodeBlock({ code, language, showLineNumbers }: CodeProps) {
	
    
	return (
		<CodeBlock
			text={code}
			language={language}
			showLineNumbers={showLineNumbers}
			theme={dracula}
		/>
	);
}
