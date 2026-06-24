export const settings = {
    staticAssets: [
        // System (shared across all subtenants)
        { path: "system/base/System/", cacheType: "PreCache", shared: true },
        { path: "system/en-US/System/", cacheType: "PreCache", shared: true },
        { path: "system/es-MX/System/", cacheType: "LazyCache", shared: true },

        // ConsumerApp (shared across all subtenants)
        { path: "system/base/ConsumerApp/", cacheType: "PreCache", shared: true },
        { path: "system/en-US/ConsumerApp/", cacheType: "PreCache", shared: true },
        { path: "system/es-MX/ConsumerApp/", cacheType: "LazyCache", shared: true },

        // Tenancy (shared across all subtenants within tenant)
        { path: "tenancy/base/System/", cacheType: "PreCache", shared: true },
        { path: "tenancy/base/ConsumerApp/", cacheType: "PreCache", shared: true },
        { path: "tenancy/en-US/ConsumerApp/", cacheType: "PreCache", shared: true },
        { path: "tenancy/es-MX/ConsumerApp/", cacheType: "LazyCache", shared: true },

        // Subtenancy (subtenant-specific, requires cache swapping)
        { path: "subtenancy/base/System/", cacheType: "PreCache", shared: false },
        { path: "subtenancy/base/ConsumerApp/", cacheType: "PreCache", shared: false },
        { path: "subtenancy/en-US/ConsumerApp/", cacheType: "PreCache", shared: false },
        { path: "subtenancy/es-MX/ConsumerApp/", cacheType: "LazyCache", shared: false },

    ]
};