import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import defense_management from './defense_management'
import thesis from './thesis'
/**
 * @see routes/web.php:254
 * @route '/faculty/coordinator/compliance'
 */
export const compliance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: compliance.url(options),
    method: 'get',
})

compliance.definition = {
    methods: ["get","head"],
    url: '/faculty/coordinator/compliance',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:254
 * @route '/faculty/coordinator/compliance'
 */
compliance.url = (options?: RouteQueryOptions) => {
    return compliance.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:254
 * @route '/faculty/coordinator/compliance'
 */
compliance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: compliance.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:254
 * @route '/faculty/coordinator/compliance'
 */
compliance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: compliance.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:254
 * @route '/faculty/coordinator/compliance'
 */
    const complianceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: compliance.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:254
 * @route '/faculty/coordinator/compliance'
 */
        complianceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: compliance.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:254
 * @route '/faculty/coordinator/compliance'
 */
        complianceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: compliance.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    compliance.form = complianceForm
/**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::communication
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
export const communication = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: communication.url(options),
    method: 'get',
})

communication.definition = {
    methods: ["get","head"],
    url: '/faculty/coordinator/communication',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::communication
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
communication.url = (options?: RouteQueryOptions) => {
    return communication.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::communication
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
communication.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: communication.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::communication
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
communication.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: communication.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::communication
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
    const communicationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: communication.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::communication
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
        communicationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: communication.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::communication
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
        communicationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: communication.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    communication.form = communicationForm
/**
 * @see routes/web.php:284
 * @route '/faculty/coordinator/grade-management'
 */
export const grade_management = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grade_management.url(options),
    method: 'get',
})

grade_management.definition = {
    methods: ["get","head"],
    url: '/faculty/coordinator/grade-management',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:284
 * @route '/faculty/coordinator/grade-management'
 */
grade_management.url = (options?: RouteQueryOptions) => {
    return grade_management.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:284
 * @route '/faculty/coordinator/grade-management'
 */
grade_management.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grade_management.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:284
 * @route '/faculty/coordinator/grade-management'
 */
grade_management.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: grade_management.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:284
 * @route '/faculty/coordinator/grade-management'
 */
    const grade_managementForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: grade_management.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:284
 * @route '/faculty/coordinator/grade-management'
 */
        grade_managementForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: grade_management.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:284
 * @route '/faculty/coordinator/grade-management'
 */
        grade_managementForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: grade_management.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    grade_management.form = grade_managementForm
const coordinator = {
    compliance: Object.assign(compliance, compliance),
communication: Object.assign(communication, communication),
defense_management: Object.assign(defense_management, defense_management),
thesis: Object.assign(thesis, thesis),
grade_management: Object.assign(grade_management, grade_management),
}

export default coordinator