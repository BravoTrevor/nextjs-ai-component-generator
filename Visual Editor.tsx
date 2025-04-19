// app/(studio)/edit/[id]/page.tsx  
export default function Editor({ params }: { params: { id: string } }) {  
    const [props, setProps] = useState<Record<string, any>>();  
    const { component } = await getComponent(params.id);  
  
    return (  
      <div className="grid md:grid-cols-2 gap-8">  
        <div className="border rounded-lg p-4">  
          <DynamicComponent {...props} />  
        </div>  
        <PropEditor  
          schema={component.propTypes}  
          onChange={setProps}  
        />  
      </div>  
    );  
  }  