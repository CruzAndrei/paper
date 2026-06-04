import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
 * @see routes/web.php:311
 * @route '/faculty/awardee/evaluation'
 */
export const evaluation = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: evaluation.url(options),
    method: 'get',
})

evaluation.definition = {
    methods: ["get","head"],
    url: '/faculty/awardee/evaluation',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:311
 * @route '/faculty/awardee/evaluation'
 */
evaluation.url = (options?: RouteQueryOptions) => {
    return evaluation.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:311
 * @route '/faculty/awardee/evaluation'
 */
evaluation.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: evaluation.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:311
 * @route '/faculty/awardee/evaluation'
 */
evaluation.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: evaluation.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:311
 * @route '/faculty/awardee/evaluation'
 */
    const evaluationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: evaluation.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:311
 * @route '/faculty/awardee/evaluation'
 */
        evaluationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: evaluation.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:311
 * @route '/faculty/awardee/evaluation'
 */
        evaluationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: evaluation.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    evaluation.form = evaluationForm
const awardee = {
    evaluation: Object.assign(evaluation, evaluation),
}

export default awardee