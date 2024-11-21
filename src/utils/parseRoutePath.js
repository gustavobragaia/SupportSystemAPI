export function parseRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g;

    // Substitui parâmetros da rota por regex com grupos nomeados válidos
    const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)");

    // Gera o regex final para a rota, incluindo query string opcional com grupo nomeado
    const pathRegex = new RegExp(`^${params}(\\?(?<query>.*))?$`);

    return pathRegex;
}
