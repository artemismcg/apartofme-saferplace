import routes from '../data/RouteData'

export default routeUtils = {
    getRoute: (route) =>{
        return routes.find((r) => r.route === route)
    }   
}