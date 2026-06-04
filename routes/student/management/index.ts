import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import compliance from './compliance'
import progress from './progress'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/management',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
index.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
index.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: index.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
index.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: index.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
index.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: index.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
index.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: index.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
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
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
        indexForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
        indexForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
        indexForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
        indexForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
        indexForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
 * @see routes/web.php:98
 * @route '/management/thesis'
 */
export const thesis = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: thesis.url(options),
    method: 'get',
})

thesis.definition = {
    methods: ["get","head"],
    url: '/management/thesis',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:98
 * @route '/management/thesis'
 */
thesis.url = (options?: RouteQueryOptions) => {
    return thesis.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:98
 * @route '/management/thesis'
 */
thesis.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: thesis.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:98
 * @route '/management/thesis'
 */
thesis.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: thesis.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:98
 * @route '/management/thesis'
 */
    const thesisForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: thesis.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:98
 * @route '/management/thesis'
 */
        thesisForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: thesis.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:98
 * @route '/management/thesis'
 */
        thesisForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: thesis.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    thesis.form = thesisForm
/**
* @see \App\Http\Controllers\Student\MatrixController::defense_matrix
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
export const defense_matrix = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: defense_matrix.url(options),
    method: 'get',
})

defense_matrix.definition = {
    methods: ["get","head"],
    url: '/management/defense_matrix',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\MatrixController::defense_matrix
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
defense_matrix.url = (options?: RouteQueryOptions) => {
    return defense_matrix.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\MatrixController::defense_matrix
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
defense_matrix.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: defense_matrix.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\MatrixController::defense_matrix
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
defense_matrix.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: defense_matrix.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\MatrixController::defense_matrix
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
    const defense_matrixForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: defense_matrix.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\MatrixController::defense_matrix
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
        defense_matrixForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: defense_matrix.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\MatrixController::defense_matrix
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
        defense_matrixForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: defense_matrix.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    defense_matrix.form = defense_matrixForm
/**
* @see \App\Http\Controllers\Student\EvaluationController::eval_n_grading
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
export const eval_n_grading = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eval_n_grading.url(options),
    method: 'get',
})

eval_n_grading.definition = {
    methods: ["get","head"],
    url: '/management/evaluation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\EvaluationController::eval_n_grading
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
eval_n_grading.url = (options?: RouteQueryOptions) => {
    return eval_n_grading.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\EvaluationController::eval_n_grading
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
eval_n_grading.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: eval_n_grading.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\EvaluationController::eval_n_grading
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
eval_n_grading.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: eval_n_grading.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\EvaluationController::eval_n_grading
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
    const eval_n_gradingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: eval_n_grading.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\EvaluationController::eval_n_grading
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
        eval_n_gradingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eval_n_grading.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\EvaluationController::eval_n_grading
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
        eval_n_gradingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: eval_n_grading.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    eval_n_grading.form = eval_n_gradingForm
const management = {
    index: Object.assign(index, index),
thesis: Object.assign(thesis, thesis),
defense_matrix: Object.assign(defense_matrix, defense_matrix),
eval_n_grading: Object.assign(eval_n_grading, eval_n_grading),
compliance: Object.assign(compliance, compliance),
progress: Object.assign(progress, progress),
}

export default management