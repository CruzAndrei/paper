import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GuestController::create
 * @see app/Http/Controllers/GuestController.php:11
 * @route '/guest/login'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/guest/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GuestController::create
 * @see app/Http/Controllers/GuestController.php:11
 * @route '/guest/login'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GuestController::create
 * @see app/Http/Controllers/GuestController.php:11
 * @route '/guest/login'
 */
create.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\GuestController::create
 * @see app/Http/Controllers/GuestController.php:11
 * @route '/guest/login'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: create.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GuestController::create
 * @see app/Http/Controllers/GuestController.php:11
 * @route '/guest/login'
 */
        createForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: create.url(options),
            method: 'post',
        })
    
    create.form = createForm
const GuestController = { create }

export default GuestController