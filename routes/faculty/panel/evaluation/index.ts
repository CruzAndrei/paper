import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
 * @see routes/web.php:218
 * @route '/faculty/panel/evaluation'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/faculty/panel/evaluation',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:218
 * @route '/faculty/panel/evaluation'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:218
 * @route '/faculty/panel/evaluation'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:218
 * @route '/faculty/panel/evaluation'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:218
 * @route '/faculty/panel/evaluation'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:218
 * @route '/faculty/panel/evaluation'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:218
 * @route '/faculty/panel/evaluation'
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
 * @see routes/web.php:222
 * @route '/faculty/panel/evaluation/document-review'
 */
export const document_review = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: document_review.url(options),
    method: 'get',
})

document_review.definition = {
    methods: ["get","head"],
    url: '/faculty/panel/evaluation/document-review',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:222
 * @route '/faculty/panel/evaluation/document-review'
 */
document_review.url = (options?: RouteQueryOptions) => {
    return document_review.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:222
 * @route '/faculty/panel/evaluation/document-review'
 */
document_review.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: document_review.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:222
 * @route '/faculty/panel/evaluation/document-review'
 */
document_review.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: document_review.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:222
 * @route '/faculty/panel/evaluation/document-review'
 */
    const document_reviewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: document_review.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:222
 * @route '/faculty/panel/evaluation/document-review'
 */
        document_reviewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: document_review.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:222
 * @route '/faculty/panel/evaluation/document-review'
 */
        document_reviewForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: document_review.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    document_review.form = document_reviewForm
/**
 * @see routes/web.php:226
 * @route '/faculty/panel/evaluation/grading'
 */
export const grading = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grading.url(options),
    method: 'get',
})

grading.definition = {
    methods: ["get","head"],
    url: '/faculty/panel/evaluation/grading',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:226
 * @route '/faculty/panel/evaluation/grading'
 */
grading.url = (options?: RouteQueryOptions) => {
    return grading.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:226
 * @route '/faculty/panel/evaluation/grading'
 */
grading.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grading.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:226
 * @route '/faculty/panel/evaluation/grading'
 */
grading.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: grading.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:226
 * @route '/faculty/panel/evaluation/grading'
 */
    const gradingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: grading.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:226
 * @route '/faculty/panel/evaluation/grading'
 */
        gradingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: grading.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:226
 * @route '/faculty/panel/evaluation/grading'
 */
        gradingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: grading.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    grading.form = gradingForm
const evaluation = {
    index: Object.assign(index, index),
document_review: Object.assign(document_review, document_review),
grading: Object.assign(grading, grading),
}

export default evaluation