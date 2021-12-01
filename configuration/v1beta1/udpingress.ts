// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../../types";
import * as utilities from "../../utilities";

import {ObjectMeta} from "../../meta/v1";

/**
 * UDPIngress is the Schema for the udpingresses API
 */
export class UDPIngress extends pulumi.CustomResource {
    /**
     * Get an existing UDPIngress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): UDPIngress {
        return new UDPIngress(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:configuration.konghq.com/v1beta1:UDPIngress';

    /**
     * Returns true if the given object is an instance of UDPIngress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UDPIngress {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UDPIngress.__pulumiType;
    }

    public readonly apiVersion!: pulumi.Output<"configuration.konghq.com/v1beta1" | undefined>;
    public readonly kind!: pulumi.Output<"UDPIngress" | undefined>;
    public readonly metadata!: pulumi.Output<ObjectMeta | undefined>;
    /**
     * UDPIngressSpec defines the desired state of UDPIngress
     */
    public readonly spec!: pulumi.Output<outputs.configuration.v1beta1.UDPIngressSpec | undefined>;
    /**
     * UDPIngressStatus defines the observed state of UDPIngress
     */
    public readonly status!: pulumi.Output<outputs.configuration.v1beta1.UDPIngressStatus | undefined>;

    /**
     * Create a UDPIngress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UDPIngressArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            inputs["apiVersion"] = "configuration.konghq.com/v1beta1";
            inputs["kind"] = "UDPIngress";
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["spec"] = args ? args.spec : undefined;
            inputs["status"] = args ? args.status : undefined;
        } else {
            inputs["apiVersion"] = undefined /*out*/;
            inputs["kind"] = undefined /*out*/;
            inputs["metadata"] = undefined /*out*/;
            inputs["spec"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(UDPIngress.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a UDPIngress resource.
 */
export interface UDPIngressArgs {
    readonly apiVersion?: pulumi.Input<"configuration.konghq.com/v1beta1">;
    readonly kind?: pulumi.Input<"UDPIngress">;
    readonly metadata?: pulumi.Input<ObjectMeta>;
    /**
     * UDPIngressSpec defines the desired state of UDPIngress
     */
    readonly spec?: pulumi.Input<inputs.configuration.v1beta1.UDPIngressSpecArgs>;
    /**
     * UDPIngressStatus defines the observed state of UDPIngress
     */
    readonly status?: pulumi.Input<inputs.configuration.v1beta1.UDPIngressStatusArgs>;
}
