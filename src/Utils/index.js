

export const findDataByAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
}