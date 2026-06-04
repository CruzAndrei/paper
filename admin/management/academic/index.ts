import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AcademicSettingController::update
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:107
 * @route '/admin/management/academic-settings'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/management/academic-settings',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\AcademicSettingController::update
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:107
 * @route '/admin/management/academic-settings'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AcademicSettingController::update
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:107
 * @route '/admin/management/academic-settings'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\AcademicSettingController::update
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:107
 * @route '/admin/management/academic-settings'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AcademicSettingController::update
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:107
 * @route '/admin/management/academic-settings'
 */
        updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const academic = {
    update: Object.assign(update, update),
}

export default academic