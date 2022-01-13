export const renderComponent = async (componentName: string) => {
    const res = await fetch(`http://localhost:3000/api/${componentName}`);
    const componentHTML = await res.text();
    return componentHTML;
}