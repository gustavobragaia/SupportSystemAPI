export function parseRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g;

    // Substitui parâmetros da rota por regex válido
    const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)");

    // Gera o regex final para a rota
    const pathRegex = new RegExp(`^${params}(\\?(.*))?$`);

    return pathRegex;
}
