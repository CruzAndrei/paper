import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::index
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:18
 * @route '/faculty/committee/proposal-review'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/faculty/committee/proposal-review',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::index
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:18
 * @route '/faculty/committee/proposal-review'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::index
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:18
 * @route '/faculty/committee/proposal-review'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::index
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:18
 * @route '/faculty/committee/proposal-review'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::index
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:18
 * @route '/faculty/committee/proposal-review'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::index
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:18
 * @route '/faculty/committee/proposal-review'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::index
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:18
 * @route '/faculty/committee/proposal-review'
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
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::store
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:120
 * @route '/faculty/committee/proposal-review'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/faculty/committee/proposal-review',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::store
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:120
 * @route '/faculty/committee/proposal-review'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::store
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:120
 * @route '/faculty/committee/proposal-review'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::store
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:120
 * @route '/faculty/committee/proposal-review'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Faculty\Committee\ProposalReview::store
 * @see app/Http/Controllers/Faculty/Committee/ProposalReview.php:120
 * @route '/faculty/committee/proposal-review'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const ProposalReview = { index, store }

export default ProposalReview