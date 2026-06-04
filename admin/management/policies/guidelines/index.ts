import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::update
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:166
 * @route '/admin/management/policies/guidelines'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/management/policies/guidelines',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::update
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:166
 * @route '/admin/management/policies/guidelines'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::update
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:166
 * @route '/admin/management/policies/guidelines'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::update
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:166
 * @route '/admin/management/policies/guidelines'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::update
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:166
 * @route '/admin/management/policies/guidelines'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const guidelines = {
    update: Object.assign(update, update),
}

export default guidelines