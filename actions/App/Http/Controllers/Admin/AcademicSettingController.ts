import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AcademicSettingController::index
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/management/academic-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AcademicSettingController::index
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AcademicSettingController::index
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AcademicSettingController::index
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AcademicSettingController::index
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AcademicSettingController::index
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AcademicSettingController::index
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
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
const AcademicSettingController = { index, update }

export default AcademicSettingController