// app/(studio)/generate/action.ts  
"use server";  

export async function generateComponent(prompt: string) {  
  const response = await openai.chat.completions.create({  
    model: "gpt-4o",  
    messages: [{  
      role: "system",  
      content: fs.readFileSync("./lib/prompts/component-gen.txt", "utf-8")  
    }, {  
      role: "user",  
      content: prompt  
    }],  
    temperature: 0.7  
  });  

  return {  
    code: extractCode(response.choices[0].message.content),  
    preview: await generatePreview(prompt) // DALL·E 3  
  };  
}  