import { useEffect, useRef } from 'react';

const AICodeMatrix = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Extensive AI agent code snippets and prompts
    const codeSnippets = [
      'agent.invoke({"messages": [HumanMessage(content=query)]}) ',
      'workflow.add_node("researcher", research_node) ',
      'from langgraph.graph import StateGraph, END ',
      'embeddings = OpenAIEmbeddings(model="text-embedding-3-large") ',
      'retriever = vectorstore.as_retriever(search_kwargs={"k": 4}) ',
      'llm = ChatAnthropic(model="claude-sonnet-4-20250514") ',
      'tools = [TavilySearchResults(max_results=3), calculator] ',
      'agent_executor = create_react_agent(llm, tools, checkpointer=memory) ',
      'class AgentState(TypedDict): messages: Annotated[list, add_messages] ',
      'prompt = ChatPromptTemplate.from_messages([("system", system_prompt)]) ',
      'workflow.add_edge("researcher", "synthesizer") ',
      'chain = prompt | llm | StrOutputParser() ',
      'async def agentic_rag(state: State): docs = await retriever.ainvoke(query) ',
      'graph = workflow.compile(checkpointer=MemorySaver()) ',
      'response = graph.stream(inputs, config={"recursion_limit": 50}) ',
      'tool_node = ToolNode(tools) ',
      'vectorstore = Chroma.from_documents(docs, embeddings, persist_directory="./db") ',
      'def should_continue(state): return "tools" if state["messages"][-1].tool_calls else END ',
      'splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200) ',
      'workflow.add_conditional_edges("agent", should_continue, {"tools": "tools", END: END}) ',
      '@tool def web_search(query: str) -> str: return tavily.search(query) ',
      'memory = PostgresSaver.from_conn_string(conn_string) ',
      'parser = PydanticOutputParser(pydantic_object=ResearchOutput) ',
      'runnable = RunnablePassthrough.assign(context=retrieve_docs) | prompt | llm ',
      'supervisor = create_supervisor_agent(llm, [researcher, coder, reviewer]) ',
      'Analyze the user requirements and generate a comprehensive solution...',
      'Processing natural language input with transformer architecture...',
      'Training neural network on dataset with 10M+ parameters...',
      'Implementing reinforcement learning for optimal decision making...',
      'Fine-tuning BERT model for sentiment analysis tasks...',
      'Deploying containerized ML pipeline to production cluster...',
      'Optimizing inference latency with model quantization...',
      'Building multi-agent system with hierarchical task decomposition...',
      'Extracting features using convolutional neural networks...',
      'Implementing attention mechanism for sequence-to-sequence models...',
      'agent_state = {"context": [], "iteration": 0, "final_answer": None}',
      'for step in agent.run(task): logger.info(f"Agent step: {step}")',
      'Integrating vector database for semantic search capabilities...',
      'Configuring RAG pipeline with document chunking strategy...',
      'model.fit(X_train, y_train, epochs=100, batch_size=32)',
      'Initializing GPT-4 with custom system prompt and temperature 0.7...',
      'Creating embedding space with dimensionality reduction techniques...',
      'Implementing chain-of-thought reasoning for complex problems...',
      'async with aiohttp.ClientSession() as session: response = await fetch()',
      'Orchestrating microservices with event-driven architecture...',
      'Evaluating model performance: accuracy=0.94, precision=0.91, recall=0.89',
      'Streaming response tokens with real-time processing pipeline...',
      'workflow.set_entry_point("input_parser").add_conditional_edges(...)',
      'Synthesizing data from multiple sources with fusion algorithms...',
      'if confidence_score > threshold: execute_action() else: request_clarification()',
      'Generating synthetic training data with augmentation techniques...',
      'Implementing zero-shot learning for novel category detection...',
      'context_window = sliding_window(text, size=512, stride=256)',
      'Running distributed training across 8 GPU clusters...',
      'Monitoring model drift with statistical analysis dashboard...',
    ];

    interface CodeRow {
      y: number;
      speed: number;
      fontSize: number;
      x: number;
      snippet: string;
      opacity: number;
      charIndex: number;
      displayText: string;
      typewriterSpeed: number;
      typewriterDelay: number;
    }

    let rows: CodeRow[] = [];

    const createCodeRow = (y: number, speed: number, fontSize: number): CodeRow => {
      const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const useTypewriter = Math.random() < 0.3; // 30% chance of typewriter effect
      
      return {
        y,
        speed,
        fontSize,
        x: canvas.width,
        snippet,
        opacity: 0.2 + Math.random() * 0.5,
        charIndex: useTypewriter ? 0 : snippet.length,
        displayText: useTypewriter ? '' : snippet,
        typewriterSpeed: 0.5 + Math.random() * 1.5,
        typewriterDelay: 0
      };
    };

    const initRows = () => {
      rows = [];
      const rowCount = 15;
      const rowSpacing = canvas.height / (rowCount + 1);
      
      for (let i = 0; i < rowCount; i++) {
        const y = rowSpacing * (i + 1);
        const speed = 0.2 + Math.random() * 1.2; // Varying speeds
        const fontSize = 12 + Math.random() * 8;
        rows.push(createCodeRow(y, speed, fontSize));
      }
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initRows();
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    function animate() {
      if (!ctx || !canvas) return;
      
      // Dark background matching your theme
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw all rows
      rows.forEach((row) => {
        // Typewriter effect
        if (row.charIndex < row.snippet.length) {
          row.typewriterDelay++;
          if (row.typewriterDelay >= row.typewriterSpeed) {
            row.charIndex++;
            row.displayText = row.snippet.substring(0, row.charIndex);
            row.typewriterDelay = 0;
          }
        }

        // Scroll movement
        row.x -= row.speed;
        const textWidth = ctx.measureText(row.displayText).width;
        
        if (row.x < -textWidth - 200) {
          // Reset row with new snippet
          const newSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          const useTypewriter = Math.random() < 0.3;
          row.x = canvas.width + Math.random() * 300;
          row.snippet = newSnippet;
          row.charIndex = useTypewriter ? 0 : newSnippet.length;
          row.displayText = useTypewriter ? '' : newSnippet;
          row.opacity = 0.2 + Math.random() * 0.5;
          row.typewriterSpeed = 0.5 + Math.random() * 1.5;
        }

        // Draw text
        ctx.font = `${row.fontSize}px "Courier New", monospace`;
        ctx.fillStyle = `rgba(255, 253, 208, ${row.opacity})`;
        ctx.fillText(row.displayText, row.x, row.y);
      });

      // Subtle fade effect on edges
      const fadeWidth = 200;
      const gradientLeft = ctx.createLinearGradient(0, 0, fadeWidth, 0);
      gradientLeft.addColorStop(0, '#1a1a1a');
      gradientLeft.addColorStop(1, 'rgba(26, 26, 26, 0)');
      ctx.fillStyle = gradientLeft;
      ctx.fillRect(0, 0, fadeWidth, canvas.height);

      const gradientRight = ctx.createLinearGradient(canvas.width - fadeWidth, 0, canvas.width, 0);
      gradientRight.addColorStop(0, 'rgba(26, 26, 26, 0)');
      gradientRight.addColorStop(1, '#1a1a1a');
      ctx.fillStyle = gradientRight;
      ctx.fillRect(canvas.width - fadeWidth, 0, fadeWidth, canvas.height);

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default AICodeMatrix;
