import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\StudentController::store
 * @see app/Http/Controllers/Admin/StudentController.php:108
 * @route '/admin/management/student/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/management/student/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\StudentController::store
 * @see app/Http/Controllers/Admin/StudentController.php:108
 * @route '/admin/management/student/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\StudentController::store
 * @see app/Http/Controllers/Admin/StudentController.php:108
 * @route '/admin/management/student/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\StudentController::store
 * @see app/Http/Controllers/Admin/StudentController.php:108
 * @route '/admin/management/student/store'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\StudentController::store
 * @see app/Http/Controllers/Admin/StudentController.php:108
 * @route '/admin/management/student/store'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const student = {
    store: Object.assign(store, store),
}

export default student