/**
 * add_dynamic_modifier
 * @description Adds a dynamic modifier to the specified scope (the default scope is ROOT).
 * @since 1.6
 * @scope {country | state | character}
 */
export interface EffectAddDynamicModifier {
  name: "add_dynamic_modifier";
  args: {
    modifier?: string;
    scope?: string;
    days?: number;
  };
}

/**
 * remove_dynamic_modifier
 * @description Removes a dynamic modifier from the current scope.
 * @since 1.6
 * @scope {country | state | character}
 */
export interface EffectRemoveDynamicModifier {
  name: "remove_dynamic_modifier";
  args: {
    modifier?: string;
  };
}

/**
 * force_update_dynamic_modifier
 * @description Forces an update to the effects given by variables within dynamic modifiers.
 * @since 1.6
 * @scope {country | state | character}
 */
export interface EffectForceUpdateDynamicModifier {
  name: "force_update_dynamic_modifier";
  args: {
    value?: boolean;
  };
}

/**
 * set_global_flag
 * @description Defines a global flag.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectSetGlobalFlag {
  name: "set_global_flag";
  args: {
    flag?: string;
    days?: number;
    value?: number;
  };
}

/**
 * play_song
 * @description Plays an audio track.
 * @since 1.9.3
 * @scope {country | state | character}
 */
export interface EffectPlaySong {
  name: "play_song";
  args: {
    song?: string;
  };
}

/**
 * clr_global_flag
 * @description Clears a defined global flag.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectClrGlobalFlag {
  name: "clr_global_flag";
  args: {
    flag?: string;
  };
}

/**
 * modify_global_flag
 * @description Adds an integer value to a flag.
 * @since 1.3
 * @scope {country | state | character}
 */
export interface EffectModifyGlobalFlag {
  name: "modify_global_flag";
  args: {
    flag?: string;
    value?: number;
    days?: number;
  };
}

/**
 * custom_effect_tooltip
 * @description Displays a localized key in the effect tooltip.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectCustomEffectTooltip {
  name: "custom_effect_tooltip";
  args: {
    tooltip?: string;
  };
}

/**
 * custom_override_tooltip
 * @description Executes the provided effects but with a custom tooltip suppressing all tooltips from all other effects inside this block.
 * @since 1.15
 * @scope {country | state | character}
 */
export interface EffectCustomOverrideTooltip {
  name: "custom_override_tooltip";
  args: {
    tooltip?: string;
    not_tooltip?: string;
  };
}

/**
 * effect_tooltip
 * @description Displays the effects in the tooltip without executing them.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectEffectTooltip {
  name: "effect_tooltip";
  args?: {};
}

/**
 * log
 * @description Displays a string in the game.log file when executed.
 * @since 1.5
 * @scope {country | state | character}
 */
export interface EffectLog {
  name: "log";
  args: {
    text?: string;
  };
}

/**
 * save_event_target_as
 * @description Saves the current scope as a key. Is cleared once execution ends.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectSaveEventTargetAs {
  name: "save_event_target_as";
  args: {
    name?: string;
  };
}

/**
 * save_global_event_target_as
 * @description Saves the current scope as a key. Persists after execution until cleared via effect.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectSaveGlobalEventTargetAs {
  name: "save_global_event_target_as";
  args: {
    name?: string;
  };
}

/**
 * clear_global_event_target
 * @description Clears a specific global event target.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectClearGlobalEventTarget {
  name: "clear_global_event_target";
  args: {
    name?: string;
  };
}

/**
 * clear_global_event_targets
 * @description Clears all global event targets.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectClearGlobalEventTargets {
  name: "clear_global_event_targets";
  args: {
    value?: boolean;
  };
}

/**
 * sound_effect
 * @description Plays the specified sound once.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectSoundEffect {
  name: "sound_effect";
  args: {
    sound?: string;
  };
}

/**
 * randomize_weather
 * @description Randomizes the weather with the specified seed.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectRandomizeWeather {
  name: "randomize_weather";
  args: {
    seed?: number;
  };
}

/**
 * set_province_name
 * @description Changes the specified province/victory point's name to the specified name.
 * @since 1.3
 * @scope {country | state | character}
 */
export interface EffectSetProvinceName {
  name: "set_province_name";
  args: {
    id?: number;
    name?: string;
  };
}

/**
 * reset_province_name
 * @description Resets the specified province's name.
 * @since 1.3
 * @scope {country | state | character}
 */
export interface EffectResetProvinceName {
  name: "reset_province_name";
  args: {
    id?: number;
  };
}

/**
 * damage_units
 * @description Damages units in the specified area.
 * @since 1.11
 * @scope {country | state | character}
 */
export interface EffectDamageUnits {
  name: "damage_units";
  args: {
    province?: number;
    state?: number;
    region?: number;
    damage?: number;
    org_damage?: number;
    str_damage?: number;
    ratio?: boolean;
    template?: string;
    army?: boolean;
    navy?: boolean;
  };
}

/**
 * create_entity
 * @description Creates an entity.
 * @since 1.11
 * @scope {country | state | character}
 */
export interface EffectCreateEntity {
  name: "create_entity";
  args: {
    entity?: string;
    id?: number;
    var?: string;
    x?: number;
    y?: number;
    z?: number;
    province?: number;
    state?: number;
    rotation?: number;
    scale?: number;
    min_zoom?: number;
    visible?: string;
  };
}

/**
 * destroy_entity
 * @description Deletes an entity.
 * @since 1.11
 * @scope {country | state | character}
 */
export interface EffectDestroyEntity {
  name: "destroy_entity";
  args: {
    id?: number;
  };
}

/**
 * set_entity_movement
 * @description Sets the position and rotation of an entity using two coordinates.
 * @since 1.11
 * @scope {country | state | character}
 */
export interface EffectSetEntityMovement {
  name: "set_entity_movement";
  args: {
    id?: number;
    ratio?: number;
    rotation?: number;
    start?: string;
    target?: string;
  };
}

/**
 * set_entity_position
 * @description Sets the position of an existing entity.
 * @since 1.11
 * @scope {country | state | character}
 */
export interface EffectSetEntityPosition {
  name: "set_entity_position";
  args: {
    id?: number;
    x?: number;
    y?: number;
    z?: number;
    province?: number;
    state?: number;
  };
}

/**
 * set_entity_rotation
 * @description Sets the currently-facing angle of an existing entity.
 * @since 1.11
 * @scope {country | state | character}
 */
export interface EffectSetEntityRotation {
  name: "set_entity_rotation";
  args: {
    id?: number;
    rotation?: number;
  };
}

/**
 * set_entity_scale
 * @description Sets the size of an existing entity.
 * @since 1.11
 * @scope {country | state | character}
 */
export interface EffectSetEntityScale {
  name: "set_entity_scale";
  args: {
    id?: number;
    scale?: number;
  };
}

/**
 * set_entity_animation
 * @description Sets the animation of a specified entity.
 * @since 1.11
 * @scope {country | state | character}
 */
export interface EffectSetEntityAnimation {
  name: "set_entity_animation";
  args: {
    id?: number;
    animation?: string;
  };
}

/**
 * build_railway
 * @description Adds a railway level between two provinces or along a predefined path.
 * @since 1.11
 * @scope {country | state | character}
 */
export interface EffectBuildRailway {
  name: "build_railway";
  args: {
    level?: number;
    build_only_on_allied?: boolean;
    fallback?: boolean;
    path?: string;
    start_province?: number;
    target_province?: number;
    start_state?: number;
    target_state?: number;
  };
}

/**
 * event_option_tooltip
 * @description Shows the tooltip usually received for hovering over an event option with the specified name.
 * @since 1.13
 * @scope {country | state | character}
 */
export interface EffectEventOptionTooltip {
  name: "event_option_tooltip";
  args: {
    option?: string;
  };
}

/**
 * create_purchase_contract
 * @description Creates a purchase contract with the specified parameters.
 * @since 1.13
 * @scope {country | state | character}
 */
export interface EffectCreatePurchaseContract {
  name: "create_purchase_contract";
  args: {
    seller?: string;
    buyer?: string;
    civilian_factories?: number;
    equipment?: string;
  };
}

/**
 * start_border_war
 * @description Starts a border war for the specified attacker and defender.
 * @since 1.5
 * @scope {country | state | character}
 */
export interface EffectStartBorderWar {
  name: "start_border_war";
  args: {
    change_state_after_war?: boolean;
    attacker?: string;
    defender?: string;
  };
}

/**
 * set_border_war_data
 * @description Sets the bonuses or penalties for the attacker and defender in an on-going border war.
 * @since 1.5
 * @scope {country | state | character}
 */
export interface EffectSetBorderWarData {
  name: "set_border_war_data";
  args: {
    attacker?: number;
    defender?: number;
    attacker_modifier?: number;
    defender_modifier?: number;
    combat_width?: number;
  };
}

/**
 * cancel_border_war
 * @description Cancels an on-going border war without a winner.
 * @since 1.5
 * @scope {country | state | character}
 */
export interface EffectCancelBorderWar {
  name: "cancel_border_war";
  args: {
    attacker?: number;
    defender?: number;
    dont_fire_events?: boolean;
  };
}

/**
 * finalize_border_war
 * @description Ends an on-going border war.
 * @since 1.5
 * @scope {country | state | character}
 */
export interface EffectFinalizeBorderWar {
  name: "finalize_border_war";
  args: {
    attacker?: number;
    defender?: number;
    attacker_win?: boolean;
    defender_win?: boolean;
  };
}

/**
 * set_variable
 * @description Sets a variable's value to the specified amount, creating it if not defined.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectSetVariable {
  name: "set_variable";
  args: {
    var?: string;
    value?: string;
    tooltip?: string;
  };
}

/**
 * set_variable_to_random
 * @description Sets a variable's value to a random amount between min and max.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectSetVariableToRandom {
  name: "set_variable_to_random";
  args: {
    var?: string;
    min?: number;
    max?: number;
    integer?: boolean;
  };
}

/**
 * clear_variable
 * @description Clears the value from the memory entirely.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectClearVariable {
  name: "clear_variable";
  args: {
    var?: string;
  };
}

/**
 * add_to_variable
 * @description Increases a variable's value by the specified amount.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectAddToVariable {
  name: "add_to_variable";
  args: {
    var?: string;
    value?: string;
    tooltip?: string;
  };
}

/**
 * subtract_from_variable
 * @description Decreases a variable's value by the specified amount.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectSubtractFromVariable {
  name: "subtract_from_variable";
  args: {
    var?: string;
    value?: string;
    tooltip?: string;
  };
}

/**
 * multiply_variable
 * @description Multiplies a variable's value by the specified amount.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectMultiplyVariable {
  name: "multiply_variable";
  args: {
    var?: string;
    value?: string;
    tooltip?: string;
  };
}

/**
 * divide_variable
 * @description Divides a variable's value by the specified amount.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectDivideVariable {
  name: "divide_variable";
  args: {
    var?: string;
    value?: string;
    tooltip?: string;
  };
}

/**
 * modulo_variable
 * @description Makes the variable become the remainder of Euclidean division.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectModuloVariable {
  name: "modulo_variable";
  args: {
    var?: string;
    value?: string;
    tooltip?: string;
  };
}

/**
 * round_variable
 * @description Rounds the variable towards the closest integer value.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectRoundVariable {
  name: "round_variable";
  args: {
    var?: string;
  };
}

/**
 * clamp_variable
 * @description Clamps the variable to ensure its value is between the two specified numbers.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectClampVariable {
  name: "clamp_variable";
  args: {
    var?: string;
    min?: string;
    max?: string;
  };
}

/**
 * career_profile_set_temp_playthrough_variable
 * @description Sets a temporary variable to a value or another variable.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectCareerProfileSetTempPlaythroughVariable {
  name: "career_profile_set_temp_playthrough_variable";
  args: {
    var?: string;
    value?: string;
  };
}

/**
 * career_profile_set_temp_variable
 * @description Sets a temporary variable to a value or another variable.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectCareerProfileSetTempVariable {
  name: "career_profile_set_temp_variable";
  args: {
    var?: string;
    value?: string;
  };
}

/**
 * add_to_array
 * @description Adds an element to the array either at the specified index, defaulting to the end otherwise.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectAddToArray {
  name: "add_to_array";
  args: {
    array?: string;
    value?: string;
    index?: number;
  };
}

/**
 * remove_from_array
 * @description Removes an element from the array with the specified value or index.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectRemoveFromArray {
  name: "remove_from_array";
  args: {
    array?: string;
    value?: string;
    index?: number;
  };
}

/**
 * clear_array
 * @description Clears the array, removing every element inside.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectClearArray {
  name: "clear_array";
  args: {
    array?: string;
  };
}

/**
 * resize_array
 * @description Resizes the array, removing or adding elements in the end if necessary.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectResizeArray {
  name: "resize_array";
  args: {
    array?: string;
    value?: string;
    size?: number;
  };
}

/**
 * find_highest_in_array
 * @description Finds the largest value in the array and assigns its value and index to a temporary variable.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectFindHighestInArray {
  name: "find_highest_in_array";
  args: {
    array?: string;
    value?: string;
    index?: string;
  };
}

/**
 * find_lowest_in_array
 * @description Finds the smallest value in the array and assigns its value and index to a temporary variable.
 * @since 1.0
 * @scope {country | state | character}
 */
export interface EffectFindLowestInArray {
  name: "find_lowest_in_array";
  args: {
    array?: string;
    value?: string;
    index?: string;
  };
}

/**
 * set_country_flag
 * @description Defines a country flag.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetCountryFlag {
  name: "set_country_flag";
  args: {
    flag?: string;
    days?: number;
    value?: number;
  };
}

/**
 * clr_country_flag
 * @description Clears a defined country flag.
 * @since 1.0
 * @scope {country}
 */
export interface EffectClrCountryFlag {
  name: "clr_country_flag";
  args: {
    flag?: string;
  };
}

/**
 * modify_country_flag
 * @description Adds an integer value to a flag.
 * @since 1.3
 * @scope {country}
 */
export interface EffectModifyCountryFlag {
  name: "modify_country_flag";
  args: {
    flag?: string;
    value?: number;
    days?: number;
  };
}

/**
 * country_event
 * @description Fires the specified event for the current country.
 * @since 1.0
 * @scope {country}
 */
export interface EffectCountryEvent {
  name: "country_event";
  args: {
    id?: string;
    days?: string;
    hours?: string;
    random_hours?: string;
    random_days?: string;
  };
}

/**
 * news_event
 * @description Fires the specified news event for the current country.
 * @since 1.0
 * @scope {country}
 */
export interface EffectNewsEvent {
  name: "news_event";
  args: {
    id?: string;
    days?: string;
    hours?: string;
    random_hours?: string;
    random_days?: string;
  };
}

/**
 * set_cosmetic_tag
 * @description Makes the current scope use the specified cosmetic tag, changing name and flag.
 * @since 1.3
 * @scope {country}
 */
export interface EffectSetCosmeticTag {
  name: "set_cosmetic_tag";
  args: {
    tag?: string;
  };
}

/**
 * drop_cosmetic_tag
 * @description Makes the current scope drop the current cosmetic tag they are using.
 * @since 1.3
 * @scope {country}
 */
export interface EffectDropCosmeticTag {
  name: "drop_cosmetic_tag";
  args: {
    value?: boolean;
  };
}

/**
 * set_rule
 * @description Toggles the special game rules for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetRule {
  name: "set_rule";
  args: {
    rule?: string;
    desc?: string;
  };
}

/**
 * set_party_rule
 * @description Toggles the special game rules for the current scope's political party.
 * @since 1.12
 * @scope {country}
 */
export interface EffectSetPartyRule {
  name: "set_party_rule";
  args: {
    ideology?: string;
    desc?: string;
    rule?: boolean;
  };
}

/**
 * add_relation_rule_override
 * @description Toggles the special game rules for the current scope in diplomacy towards the specified country only.
 * @since 1.13
 * @scope {country}
 */
export interface EffectAddRelationRuleOverride {
  name: "add_relation_rule_override";
  args: {
    target?: string;
    usage_desc?: string;
    trigger?: string;
    rule?: boolean;
  };
}

/**
 * remove_relation_rule_override
 * @description Removes the toggle added with add_relation_rule_override.
 * @since 1.13
 * @scope {country}
 */
export interface EffectRemoveRelationRuleOverride {
  name: "remove_relation_rule_override";
  args: {
    target?: string;
    usage_desc?: string;
    trigger?: string;
    rule?: boolean;
  };
}

/**
 * scoped_sound_effect
 * @description Plays the specified sound once only for the current country.
 * @since 1.6
 * @scope {country}
 */
export interface EffectScopedSoundEffect {
  name: "scoped_sound_effect";
  args: {
    sound?: string;
  };
}

/**
 * scoped_play_song
 * @description Plays an audio track for the specified country only.
 * @since 1.9.3
 * @scope {country}
 */
export interface EffectScopedPlaySong {
  name: "scoped_play_song";
  args: {
    song?: string;
  };
}

/**
 * goto_province
 * @description Moves the camera position over the specified province.
 * @since 1.0
 * @scope {country}
 */
export interface EffectGotoProvince {
  name: "goto_province";
  args: {
    id?: number;
  };
}

/**
 * goto_state
 * @description Moves the camera position over the specified state.
 * @since 1.0
 * @scope {country}
 */
export interface EffectGotoState {
  name: "goto_state";
  args: {
    state?: string;
  };
}

/**
 * change_tag_from
 * @description Switches the player to the current scope from the target scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectChangeTagFrom {
  name: "change_tag_from";
  args: {
    country?: string;
  };
}

/**
 * reserve_dynamic_country
 * @description Reserves the dynamic country, making sure that it does not get recycled for civil war.
 * @since 1.9
 * @scope {country}
 */
export interface EffectReserveDynamicCountry {
  name: "reserve_dynamic_country";
  args: {
    value?: boolean;
  };
}

/**
 * force_update_map_mode
 * @description Forcefully refreshes the specified mapmode for the player.
 * @since 1.11
 * @scope {country}
 */
export interface EffectForceUpdateMapMode {
  name: "force_update_map_mode";
  args: {
    mapmode?: string;
  };
}

/**
 * add_ai_strategy
 * @description Sets an AI strategy for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddAiStrategy {
  name: "add_ai_strategy";
  args: {
    type?: string;
    id?: string;
    value?: number;
  };
}

/**
 * create_dynamic_country
 * @description Creates a new dynamic country, akin to ones used in civil wars.
 * @since 1.9
 * @scope {country}
 */
export interface EffectCreateDynamicCountry {
  name: "create_dynamic_country";
  args: {
    original_tag?: string;
    copy_tag?: string;
  };
}

/**
 * add_state_core
 * @description Adds a core for the current scope to the specified state.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddStateCore {
  name: "add_state_core";
  args: {
    state?: string;
  };
}

/**
 * remove_state_core
 * @description Removes the core of the current scope from the specified state.
 * @since 1.0
 * @scope {country}
 */
export interface EffectRemoveStateCore {
  name: "remove_state_core";
  args: {
    state?: string;
  };
}

/**
 * set_capital
 * @description Makes the specified state the current scope's capital state.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetCapital {
  name: "set_capital";
  args: {
    state?: string;
    remember_old_capital?: boolean;
  };
}

/**
 * add_state_claim
 * @description Adds a claim for the current scope on the specified state.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddStateClaim {
  name: "add_state_claim";
  args: {
    state?: string;
  };
}

/**
 * remove_state_claim
 * @description Removes a claim of the current scope from the specified state.
 * @since 1.0
 * @scope {country}
 */
export interface EffectRemoveStateClaim {
  name: "remove_state_claim";
  args: {
    state?: string;
  };
}

/**
 * set_state_owner
 * @description Makes the current scope the owner of the specified state.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetStateOwner {
  name: "set_state_owner";
  args: {
    state?: string;
  };
}

/**
 * set_state_controller
 * @description Makes the current scope the controller of the specified state.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetStateController {
  name: "set_state_controller";
  args: {
    state?: string;
  };
}

/**
 * add_contested_owner
 * @description Adds a contested owner to a state.
 * @since 1.15
 * @scope {country | state}
 */
export interface EffectAddContestedOwner {
  name: "add_contested_owner";
  args: {
    state?: string;
  };
}

/**
 * remove_contested_owner
 * @description Removes a contested owner to a state.
 * @since 1.15
 * @scope {country | state}
 */
export interface EffectRemoveContestedOwner {
  name: "remove_contested_owner";
  args: {
    state?: string;
  };
}

/**
 * transfer_state
 * @description Makes the current scope the owner and controller of the specified state.
 * @since 1.0
 * @scope {country}
 */
export interface EffectTransferState {
  name: "transfer_state";
  args: {
    state?: string;
  };
}

/**
 * set_province_controller
 * @description Changes the controller of the specified province to the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetProvinceController {
  name: "set_province_controller";
  args: {
    province?: number;
  };
}

/**
 * add_political_power
 * @description Adds the specified amount of political power to the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddPoliticalPower {
  name: "add_political_power";
  args: {
    amount?: string;
  };
}

/**
 * set_political_power
 * @description Sets the specified amount of political power for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetPoliticalPower {
  name: "set_political_power";
  args: {
    amount?: string;
  };
}

/**
 * add_stability
 * @description Adds to the current stability value for the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectAddStability {
  name: "add_stability";
  args: {
    amount?: string;
  };
}

/**
 * set_stability
 * @description Sets the current stability value for the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectSetStability {
  name: "set_stability";
  args: {
    amount?: string;
  };
}

/**
 * add_war_support
 * @description Adds to the current war support value for the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectAddWarSupport {
  name: "add_war_support";
  args: {
    amount?: string;
  };
}

/**
 * set_war_support
 * @description Sets the current war support value for the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectSetWarSupport {
  name: "set_war_support";
  args: {
    amount?: string;
  };
}

/**
 * add_command_power
 * @description Adds the specified amount of command power to the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectAddCommandPower {
  name: "add_command_power";
  args: {
    amount?: string;
  };
}

/**
 * add_manpower
 * @description Adds the specified amount of manpower to the current scope.
 * @since 1.0
 * @scope {country | state}
 */
export interface EffectAddManpower {
  name: "add_manpower";
  args: {
    amount?: string;
  };
}

/**
 * army_experience
 * @description Adds the specified amount of army experience to the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectArmyExperience {
  name: "army_experience";
  args: {
    amount?: string;
  };
}

/**
 * navy_experience
 * @description Adds the specified amount of navy experience to the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectNavyExperience {
  name: "navy_experience";
  args: {
    amount?: string;
  };
}

/**
 * air_experience
 * @description Adds the specified amount of air experience to the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAirExperience {
  name: "air_experience";
  args: {
    amount?: string;
  };
}

/**
 * set_politics
 * @description Sets the political status of the country, including the ruling party and elections.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetPolitics {
  name: "set_politics";
  args: {
    ruling_party?: string;
    elections_allowed?: boolean;
    last_election?: string;
    election_frequency?: number;
    long_name?: string;
    name?: string;
  };
}

/**
 * set_popularities
 * @description Sets the political party popularities for the current scope.
 * @since 1.7
 * @scope {country}
 */
export interface EffectSetPopularities {
  name: "set_popularities";
  args: {
    democratic?: string;
    fascism?: string;
    communism?: string;
    neutrality?: string;
  };
}

/**
 * add_popularity
 * @description Adjusts the popularity for the specified party in the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddPopularity {
  name: "add_popularity";
  args: {
    ideology?: string;
    popularity?: string;
  };
}

/**
 * set_political_party
 * @description Sets the popularity for the specified political party in the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetPoliticalParty {
  name: "set_political_party";
  args: {
    ideology?: string;
    popularity?: number;
  };
}

/**
 * set_party_name
 * @description Changes the name of the specified political party for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetPartyName {
  name: "set_party_name";
  args: {
    ideology?: string;
    long_name?: string;
    name?: string;
  };
}

/**
 * hold_election
 * @description Executes the events in the on_new_term_election on action for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectHoldElection {
  name: "hold_election";
  args: {
    country?: string;
  };
}

/**
 * set_power_balance
 * @description Sets a new balance of power or edits the existing one.
 * @since 1.12
 * @scope {country}
 */
export interface EffectSetPowerBalance {
  name: "set_power_balance";
  args: {
    id?: string;
    left_side?: string;
    right_side?: string;
    set_default?: boolean;
    set_value?: number;
  };
}

/**
 * remove_power_balance
 * @description Removes the balance of power in entirety.
 * @since 1.12
 * @scope {country}
 */
export interface EffectRemovePowerBalance {
  name: "remove_power_balance";
  args: {
    id?: string;
  };
}

/**
 * add_power_balance_value
 * @description Pushes the balance of power towards one side.
 * @since 1.12
 * @scope {country}
 */
export interface EffectAddPowerBalanceValue {
  name: "add_power_balance_value";
  args: {
    id?: string;
    value?: number;
    tooltip_side?: string;
  };
}

/**
 * add_power_balance_modifier
 * @description Applies a balance of power modifier.
 * @since 1.12
 * @scope {country}
 */
export interface EffectAddPowerBalanceModifier {
  name: "add_power_balance_modifier";
  args: {
    id?: string;
    modifier?: string;
  };
}

/**
 * remove_power_balance_modifier
 * @description Cancels a balance of power modifier.
 * @since 1.12
 * @scope {country}
 */
export interface EffectRemovePowerBalanceModifier {
  name: "remove_power_balance_modifier";
  args: {
    id?: string;
    modifier?: string;
  };
}

/**
 * remove_all_power_balance_modifiers
 * @description Cancels all balance of power modifiers.
 * @since 1.12
 * @scope {country}
 */
export interface EffectRemoveAllPowerBalanceModifiers {
  name: "remove_all_power_balance_modifiers";
  args: {
    id?: string;
  };
}

/**
 * set_power_balance_gfx
 * @description Changes the appearance of one of the sides within the balance of power.
 * @since 1.12
 * @scope {country}
 */
export interface EffectSetPowerBalanceGfx {
  name: "set_power_balance_gfx";
  args: {
    id?: string;
    side?: string;
    gfx?: string;
  };
}

/**
 * set_major
 * @description Makes the current scope a major country.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetMajor {
  name: "set_major";
  args: {
    value?: boolean;
  };
}

/**
 * create_faction
 * @description Creates a faction with the specified name for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectCreateFaction {
  name: "create_faction";
  args: {
    name?: string;
  };
}

/**
 * add_to_faction
 * @description Adds the target country to the faction of the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddToFaction {
  name: "add_to_faction";
  args: {
    target?: string;
  };
}

/**
 * leave_faction
 * @description Removes the current scope from the faction they are part of.
 * @since 1.5
 * @scope {country}
 */
export interface EffectLeaveFaction {
  name: "leave_faction";
  args: {
    value?: boolean;
  };
}

/**
 * remove_from_faction
 * @description Removes the specified scope from the faction led by the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectRemoveFromFaction {
  name: "remove_from_faction";
  args: {
    target?: string;
  };
}

/**
 * dismantle_faction
 * @description Dismantles the faction of the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectDismantleFaction {
  name: "dismantle_faction";
  args: {
    value?: boolean;
  };
}

/**
 * set_faction_name
 * @description Changes faction names.
 * @since 1.6
 * @scope {country}
 */
export interface EffectSetFactionName {
  name: "set_faction_name";
  args: {
    name?: string;
  };
}

/**
 * set_faction_leader
 * @description Sets the current country as the faction leader.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetFactionLeader {
  name: "set_faction_leader";
  args: {
    value?: boolean;
  };
}

/**
 * set_faction_spymaster
 * @description Sets the current country as the faction spymaster.
 * @since 1.9
 * @scope {country}
 */
export interface EffectSetFactionSpymaster {
  name: "set_faction_spymaster";
  args: {
    value?: boolean;
  };
}

/**
 * release
 * @description Releases the specified non-existent country as a free nation.
 * @since 1.0
 * @scope {country}
 */
export interface EffectRelease {
  name: "release";
  args: {
    target?: string;
  };
}

/**
 * release_on_controlled
 * @description Releases the specified non-existent country as a free nation within controlled states.
 * @since 1.9.1
 * @scope {country}
 */
export interface EffectReleaseOnControlled {
  name: "release_on_controlled";
  args: {
    target?: string;
  };
}

/**
 * release_puppet
 * @description Releases the specified non-existent country as a puppet.
 * @since 1.0
 * @scope {country}
 */
export interface EffectReleasePuppet {
  name: "release_puppet";
  args: {
    target?: string;
  };
}

/**
 * release_puppet_on_controlled
 * @description Releases the specified non-existent country as a puppet within controlled states.
 * @since 1.9.1
 * @scope {country}
 */
export interface EffectReleasePuppetOnControlled {
  name: "release_puppet_on_controlled";
  args: {
    target?: string;
  };
}

/**
 * release_autonomy
 * @description Releases the specified non-existent country as a subject of the specified autonomy.
 * @since 1.3
 * @scope {country}
 */
export interface EffectReleaseAutonomy {
  name: "release_autonomy";
  args: {
    target?: string;
    autonomy_state?: string;
    freedom_level?: number;
  };
}

/**
 * give_guarantee
 * @description The current scope guarantees the target country.
 * @since 1.0
 * @scope {country}
 */
export interface EffectGiveGuarantee {
  name: "give_guarantee";
  args: {
    target?: string;
  };
}

/**
 * give_military_access
 * @description The current scope grants military access to the target country.
 * @since 1.0
 * @scope {country}
 */
export interface EffectGiveMilitaryAccess {
  name: "give_military_access";
  args: {
    target?: string;
  };
}

/**
 * recall_attache
 * @description Recalls the current scope's attaché from the specified country.
 * @since 1.5
 * @scope {country}
 */
export interface EffectRecallAttache {
  name: "recall_attache";
  args: {
    target?: string;
  };
}

/**
 * diplomatic_relation
 * @description Used to define a diplomatic relation between the current scope and target scope country.
 * @since 1.0
 * @scope {country}
 */
export interface EffectDiplomaticRelation {
  name: "diplomatic_relation";
  args: {
    country?: string;
    relation?: string;
    active?: boolean;
  };
}

/**
 * add_opinion_modifier
 * @description The current scope gains the specified opinion modifier towards the target scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddOpinionModifier {
  name: "add_opinion_modifier";
  args: {
    target?: string;
    modifier?: string;
  };
}

/**
 * remove_opinion_modifier
 * @description The current scope loses the specified opinion modifier towards the target scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectRemoveOpinionModifier {
  name: "remove_opinion_modifier";
  args: {
    target?: string;
    modifier?: string;
  };
}

/**
 * reverse_add_opinion_modifier
 * @description The target scope gains the specified opinion modifier towards the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectReverseAddOpinionModifier {
  name: "reverse_add_opinion_modifier";
  args: {
    target?: string;
    modifier?: string;
  };
}

/**
 * add_relation_modifier
 * @description The current scope gains the specified relation modifier towards the target scope.
 * @since 1.4
 * @scope {country}
 */
export interface EffectAddRelationModifier {
  name: "add_relation_modifier";
  args: {
    target?: string;
    modifier?: string;
  };
}

/**
 * remove_relation_modifier
 * @description The current scope loses the specified relation modifier for towards the target scope.
 * @since 1.4
 * @scope {country}
 */
export interface EffectRemoveRelationModifier {
  name: "remove_relation_modifier";
  args: {
    target?: string;
    modifier?: string;
  };
}

/**
 * add_collaboration
 * @description Adds collaboration in TAG with the scoped country.
 * @since 1.9
 * @scope {country}
 */
export interface EffectAddCollaboration {
  name: "add_collaboration";
  args: {
    target?: string;
    value?: number;
  };
}

/**
 * set_collaboration
 * @description Sets the collaboration in TAG with the scoped country.
 * @since 1.9
 * @scope {country}
 */
export interface EffectSetCollaboration {
  name: "set_collaboration";
  args: {
    target?: string;
    value?: number;
  };
}

/**
 * recall_volunteers_from
 * @description Recalls volunteers sent to the specified country back to the current country.
 * @since 1.9
 * @scope {country}
 */
export interface EffectRecallVolunteersFrom {
  name: "recall_volunteers_from";
  args: {
    target?: string;
  };
}

/**
 * set_occupation_law
 * @description Sets the occupation law of the country.
 * @since 1.12
 * @scope {country | state}
 */
export interface EffectSetOccupationLaw {
  name: "set_occupation_law";
  args: {
    law?: string;
  };
}

/**
 * set_occupation_law_where_available
 * @description Sets the occupation law of the country where possible.
 * @since 1.12
 * @scope {country}
 */
export interface EffectSetOccupationLawWhereAvailable {
  name: "set_occupation_law_where_available";
  args: {
    law?: string;
  };
}

/**
 * send_embargo
 * @description Embargos the target country.
 * @since 1.12
 * @scope {country}
 */
export interface EffectSendEmbargo {
  name: "send_embargo";
  args: {
    target?: string;
  };
}

/**
 * break_embargo
 * @description Stops embargoing the target country.
 * @since 1.12
 * @scope {country}
 */
export interface EffectBreakEmbargo {
  name: "break_embargo";
  args: {
    target?: string;
  };
}

/**
 * give_market_access
 * @description Opens market access between the two countries.
 * @since 1.13
 * @scope {country}
 */
export interface EffectGiveMarketAccess {
  name: "give_market_access";
  args: {
    target?: string;
  };
}

/**
 * puppet
 * @description Makes the specified country a subject of the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectPuppet {
  name: "puppet";
  args: {
    target?: string;
    end_wars?: boolean;
    end_civil_wars?: boolean;
  };
}

/**
 * end_puppet
 * @description Removes the subject status between the target and the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectEndPuppet {
  name: "end_puppet";
  args: {
    target?: string;
  };
}

/**
 * add_autonomy_ratio
 * @description Adds a freedom score ratio modifier to the current scope.
 * @since 1.3
 * @scope {country}
 */
export interface EffectAddAutonomyRatio {
  name: "add_autonomy_ratio";
  args: {
    value?: number;
    localization?: string;
  };
}

/**
 * add_autonomy_score
 * @description Adds an exact freedom score modifier to the current scope.
 * @since 1.3
 * @scope {country}
 */
export interface EffectAddAutonomyScore {
  name: "add_autonomy_score";
  args: {
    value?: number;
    localization?: string;
  };
}

/**
 * set_autonomy
 * @description Sets the autonomy level for the specified country, including independence.
 * @since 1.3
 * @scope {country}
 */
export interface EffectSetAutonomy {
  name: "set_autonomy";
  args: {
    target?: string;
    autonomous_state?: string;
    freedom_level?: number;
    end_wars?: boolean;
    end_civil_wars?: boolean;
  };
}

/**
 * add_legitimacy
 * @description Adds legitimacy to a government in exile.
 * @since 1.6
 * @scope {country}
 */
export interface EffectAddLegitimacy {
  name: "add_legitimacy";
  args: {
    amount?: number;
  };
}

/**
 * set_legitimacy
 * @description Sets the legitimacy of governments in exile.
 * @since 1.6
 * @scope {country}
 */
export interface EffectSetLegitimacy {
  name: "set_legitimacy";
  args: {
    amount?: number;
  };
}

/**
 * become_exiled_in
 * @description Makes a country a government in exile in a set country.
 * @since 1.6
 * @scope {country}
 */
export interface EffectBecomeExiledIn {
  name: "become_exiled_in";
  args: {
    target?: string;
    legitimacy?: number;
  };
}

/**
 * end_exile
 * @description Ends a government in exile.
 * @since 1.6
 * @scope {country}
 */
export interface EffectEndExile {
  name: "end_exile";
  args: {
    value?: boolean;
  };
}

/**
 * add_threat
 * @description Adjusts the level of World Tension.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddThreat {
  name: "add_threat";
  args: {
    amount?: number;
  };
}

/**
 * add_named_threat
 * @description Adjusts the level of World Tension and adds an entry in the World Tension tooltip.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddNamedThreat {
  name: "add_named_threat";
  args: {
    threat?: number;
    name?: string;
  };
}

/**
 * annex_country
 * @description Annex the specified country for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAnnexCountry {
  name: "annex_country";
  args: {
    target?: string;
    transfer_troops?: boolean;
  };
}

/**
 * add_to_war
 * @description Forces the current scope to join the war of the specified ally against the specified enemy.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddToWar {
  name: "add_to_war";
  args: {
    targeted_alliance?: string;
    enemy?: string;
    hostility_reason?: string;
  };
}

/**
 * declare_war_on
 * @description Makes the current scope declare war on the specified country with the specified wargoal.
 * @since 1.0
 * @scope {country}
 */
export interface EffectDeclareWarOn {
  name: "declare_war_on";
  args: {
    target?: string;
    type?: string;
    generator?: string;
  };
}

/**
 * white_peace
 * @description Makes the current scope white peace the specified scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectWhitePeace {
  name: "white_peace";
  args: {
    tag?: string;
    message?: string;
  };
}

/**
 * start_peace_conference
 * @description Makes the current scope start a peace conference with the specified scope on the other side.
 * @since 1.12
 * @scope {country}
 */
export interface EffectStartPeaceConference {
  name: "start_peace_conference";
  args: {
    tag?: string;
    score_factor?: string;
    message?: string;
    winner_scope?: string;
    loser_scope?: string;
  };
}

/**
 * set_truce
 * @description Makes the current scope truce with the specified scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetTruce {
  name: "set_truce";
  args: {
    target?: string;
    days?: number;
  };
}

/**
 * create_wargoal
 * @description Grants the current scope a wargoal against the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface EffectCreateWargoal {
  name: "create_wargoal";
  args: {
    target?: string;
    type?: string;
    generator?: string;
    expire?: number;
  };
}

/**
 * remove_wargoal
 * @description Removes wargoals from the current scope to the specified country.
 * @since 1.10.2
 * @scope {country}
 */
export interface EffectRemoveWargoal {
  name: "remove_wargoal";
  args: {
    target?: string;
    type?: string;
  };
}

/**
 * start_civil_war
 * @description Starts a civil war for the current scope with the specified parameters.
 * @since 1.0
 * @scope {country}
 */
export interface EffectStartCivilWar {
  name: "start_civil_war";
  args: {
    ideology?: string;
    ruling_party?: string;
    size?: number;
    army_ratio?: number;
    navy_ratio?: number;
    air_ratio?: number;
    capital?: string;
    states?: string;
    states_filter?: string;
    keep_unit_leaders?: string;
    keep_unit_leaders_trigger?: string;
    keep_scientists_trigger?: string;
    keep_political_leader?: boolean;
    keep_political_party_members?: boolean;
    keep_all_characters?: boolean;
  };
}

/**
 * add_civil_war_target
 * @description Sets that the war between ROOT and TAG is a civil war.
 * @since 1.9
 * @scope {country}
 */
export interface EffectAddCivilWarTarget {
  name: "add_civil_war_target";
  args: {
    target?: string;
  };
}

/**
 * remove_civil_war_target
 * @description Removes the status of the war as a civil war between the pair of countries.
 * @since 1.12.13
 * @scope {country}
 */
export interface EffectRemoveCivilWarTarget {
  name: "remove_civil_war_target";
  args: {
    target?: string;
  };
}

/**
 * transfer_units_fraction
 * @description Transfers a fraction of the military to a target.
 * @since 1.9
 * @scope {country}
 */
export interface EffectTransferUnitsFraction {
  name: "transfer_units_fraction";
  args: {
    target?: string;
    size?: number;
    stockpile_ratio?: number;
    army_ratio?: number;
    navy_ratio?: number;
    air_ratio?: number;
    keep_unit_leaders_trigger?: string;
  };
}

/**
 * add_nuclear_bombs
 * @description Adds nuclear bomb to TAG's stockpile.
 * @since 1.6
 * @scope {country}
 */
export interface EffectAddNuclearBombs {
  name: "add_nuclear_bombs";
  args: {
    amount?: number;
  };
}

/**
 * launch_nuke
 * @description Nukes the specified province or a province in the needed state.
 * @since 1.6
 * @scope {country}
 */
export interface EffectLaunchNuke {
  name: "launch_nuke";
  args: {
    province?: number;
    state?: number;
    controller?: string;
    use_nuke?: boolean;
    nuke_type?: string;
  };
}

/**
 * add_resource
 * @description Adds the specified resource in the specified amount to the specified state.
 * @since 1.0
 * @scope {country | state}
 */
export interface EffectAddResource {
  name: "add_resource";
  args: {
    type?: string;
    amount?: number;
    state?: number;
    show_state_in_tooltip?: boolean;
  };
}

/**
 * create_import
 * @description Creates an import for the current scope with the specified resource.
 * @since 1.0
 * @scope {country}
 */
export interface EffectCreateImport {
  name: "create_import";
  args: {
    resource?: string;
    amount?: number;
    exporter?: string;
  };
}

/**
 * give_resource_rights
 * @description Gives all the resources of a state to the target country.
 * @since 1.6
 * @scope {country}
 */
export interface EffectGiveResourceRights {
  name: "give_resource_rights";
  args: {
    receiver?: string;
    state?: string;
    resources?: string;
  };
}

/**
 * remove_resource_rights
 * @description Removes given resource rights.
 * @since 1.6
 * @scope {country}
 */
export interface EffectRemoveResourceRights {
  name: "remove_resource_rights";
  args: {
    state?: string;
  };
}

/**
 * add_fuel
 * @description Adds fuel to the current country.
 * @since 1.6
 * @scope {country}
 */
export interface EffectAddFuel {
  name: "add_fuel";
  args: {
    amount?: number;
  };
}

/**
 * set_fuel
 * @description Sets country's current fuel amount.
 * @since 1.6
 * @scope {country}
 */
export interface EffectSetFuel {
  name: "set_fuel";
  args: {
    amount?: number;
  };
}

/**
 * set_fuel_ratio
 * @description Set country's current fuel ratio relative to its capacity.
 * @since 1.6
 * @scope {country}
 */
export interface EffectSetFuelRatio {
  name: "set_fuel_ratio";
  args: {
    ratio?: number;
  };
}

/**
 * add_offsite_building
 * @description Adds an off-map building for the current scope that produces its effects without being present in a state.
 * @since 1.5
 * @scope {country}
 */
export interface EffectAddOffsiteBuilding {
  name: "add_offsite_building";
  args: {
    type?: string;
    level?: string;
  };
}

/**
 * modify_building_resources
 * @description Modifies the resource output of the specified building for the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectModifyBuildingResources {
  name: "modify_building_resources";
  args: {
    building?: string;
    resource?: string;
    amount?: number;
  };
}

/**
 * damage_building
 * @description Damages a building in a targeted state or province.
 * @since 1.3
 * @scope {country | state}
 */
export interface EffectDamageBuilding {
  name: "damage_building";
  args: {
    type?: string;
    state?: string;
    tags?: string;
    repair_speed_modifier?: number;
    damage?: number;
    province?: string;
  };
}

/**
 * load_focus_tree
 * @description Loads a new focus tree for the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectLoadFocusTree {
  name: "load_focus_tree";
  args: {
    tree?: string;
    keep_completed?: boolean;
    copy_completed_from?: string;
  };
}

/**
 * unlock_national_focus
 * @description Bypasses the specified focus for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectUnlockNationalFocus {
  name: "unlock_national_focus";
  args: {
    focus?: string;
  };
}

/**
 * complete_national_focus
 * @description Completes the specified focus for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectCompleteNationalFocus {
  name: "complete_national_focus";
  args: {
    focus?: string;
    originator_name?: string;
  };
}

/**
 * uncomplete_national_focus
 * @description Removes a focus from list of completed focus.
 * @since 1.11
 * @scope {country}
 */
export interface EffectUncompleteNationalFocus {
  name: "uncomplete_national_focus";
  args: {
    focus?: string;
    uncomplete_children?: boolean;
    refund_political_power?: boolean;
  };
}

/**
 * mark_focus_tree_layout_dirty
 * @description Refreshes the focus tree for the specified country.
 * @since 1.9
 * @scope {country}
 */
export interface EffectMarkFocusTreeLayoutDirty {
  name: "mark_focus_tree_layout_dirty";
  args: {
    value?: boolean;
  };
}

/**
 * activate_shine_on_focus
 * @description Activates the shine effect on the focus with the given id.
 * @since 1.15
 * @scope {country}
 */
export interface EffectActivateShineOnFocus {
  name: "activate_shine_on_focus";
  args: {
    focus?: string;
  };
}

/**
 * deactivate_shine_on_focus
 * @description Deactivate the shine effect on the focus with the given id.
 * @since 1.15
 * @scope {country}
 */
export interface EffectDeactivateShineOnFocus {
  name: "deactivate_shine_on_focus";
  args: {
    focus?: string;
  };
}

/**
 * activate_decision
 * @description Activates the specified decision for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectActivateDecision {
  name: "activate_decision";
  args: {
    decision?: string;
  };
}

/**
 * activate_targeted_decision
 * @description Activates the specified targeted decision for the specified target.
 * @since 1.5
 * @scope {country}
 */
export interface EffectActivateTargetedDecision {
  name: "activate_targeted_decision";
  args: {
    target?: string;
    decision?: string;
  };
}

/**
 * remove_targeted_decision
 * @description Removes the specified targeted decision for the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectRemoveTargetedDecision {
  name: "remove_targeted_decision";
  args: {
    target?: string;
    decision?: string;
  };
}

/**
 * unlock_decision_tooltip
 * @description Displays a special tooltip for the specified decision.
 * @since 1.5
 * @scope {country}
 */
export interface EffectUnlockDecisionTooltip {
  name: "unlock_decision_tooltip";
  args: {
    decision?: string;
    show_effect_tooltip?: boolean;
    show_modifiers?: boolean;
  };
}

/**
 * unlock_decision_category_tooltip
 * @description Displays a special tooltip for the specified decision category.
 * @since 1.5
 * @scope {country}
 */
export interface EffectUnlockDecisionCategoryTooltip {
  name: "unlock_decision_category_tooltip";
  args: {
    category?: string;
  };
}

/**
 * add_days_remove
 * @description Adds the number of days to the timer created by a decision's days_remove.
 * @since 1.9
 * @scope {country}
 */
export interface EffectAddDaysRemove {
  name: "add_days_remove";
  args: {
    decision?: string;
    days?: string;
  };
}

/**
 * remove_decision
 * @description Removes a decision without running remove_effect.
 * @since 1.6
 * @scope {country}
 */
export interface EffectRemoveDecision {
  name: "remove_decision";
  args: {
    decision?: string;
  };
}

/**
 * remove_decision_on_cooldown
 * @description If the decision is on cooldown, it gets removed.
 * @since 1.11
 * @scope {country}
 */
export interface EffectRemoveDecisionOnCooldown {
  name: "remove_decision_on_cooldown";
  args: {
    decision?: string;
  };
}

/**
 * activate_mission
 * @description Activates the specified mission for the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectActivateMission {
  name: "activate_mission";
  args: {
    mission?: string;
  };
}

/**
 * activate_mission_tooltip
 * @description Displays a special tooltip for the specified mission.
 * @since 1.5
 * @scope {country}
 */
export interface EffectActivateMissionTooltip {
  name: "activate_mission_tooltip";
  args: {
    mission?: string;
  };
}

/**
 * remove_mission
 * @description Removes the specified mission for the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectRemoveMission {
  name: "remove_mission";
  args: {
    mission?: string;
  };
}

/**
 * add_days_mission_timeout
 * @description Adds the number of days to the specified mission.
 * @since 1.9
 * @scope {country}
 */
export interface EffectAddDaysMissionTimeout {
  name: "add_days_mission_timeout";
  args: {
    mission?: string;
    days?: string;
  };
}

/**
 * add_research_slot
 * @description Adjusts the number of research slots the current scope has.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddResearchSlot {
  name: "add_research_slot";
  args: {
    amount?: number;
  };
}

/**
 * set_research_slots
 * @description Sets the number of research slots the current scope has.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetResearchSlots {
  name: "set_research_slots";
  args: {
    amount?: number;
  };
}

/**
 * add_tech_bonus
 * @description Grants a research bonus to the current scope with the specified parameters.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddTechBonus {
  name: "add_tech_bonus";
  args: {
    bonus?: number;
    uses?: number;
    ahead_reduction?: number;
    category?: string;
    technology?: string;
    name?: string;
  };
}

/**
 * set_technology
 * @description Grants the specified technology to the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetTechnology {
  name: "set_technology";
  args: {
    technology?: string;
    popup?: boolean;
  };
}

/**
 * add_to_tech_sharing_group
 * @description Adds the current scope to the specified technology sharing group.
 * @since 1.3
 * @scope {country}
 */
export interface EffectAddToTechSharingGroup {
  name: "add_to_tech_sharing_group";
  args: {
    id?: string;
  };
}

/**
 * remove_from_tech_sharing_group
 * @description Removes the current scope from the specified technology sharing group.
 * @since 1.3
 * @scope {country}
 */
export interface EffectRemoveFromTechSharingGroup {
  name: "remove_from_tech_sharing_group";
  args: {
    id?: string;
  };
}

/**
 * modify_tech_sharing_bonus
 * @description Modifies the specified technology sharing group.
 * @since 1.3
 * @scope {country}
 */
export interface EffectModifyTechSharingBonus {
  name: "modify_tech_sharing_bonus";
  args: {
    id?: string;
    bonus?: number;
  };
}

/**
 * inherit_technology
 * @description Makes the current country's researched technologies be copied from the specified country.
 * @since 1.6
 * @scope {country}
 */
export interface EffectInheritTechnology {
  name: "inherit_technology";
  args: {
    target?: string;
  };
}

/**
 * add_doctrine_cost_reduction
 * @description Gives bonuses of reducing land doctrine cost to current scope.
 * @since 1.11
 * @scope {country}
 */
export interface EffectAddDoctrineCostReduction {
  name: "add_doctrine_cost_reduction";
  args: {
    name?: string;
    cost_reduction?: number;
    uses?: number;
    category?: string;
  };
}

/**
 * mark_technology_tree_layout_dirty
 * @description Forces the refresh of the hidden technologies for the scoped country.
 * @since 1.15
 * @scope {country}
 */
export interface EffectMarkTechnologyTreeLayoutDirty {
  name: "mark_technology_tree_layout_dirty";
  args: {
    value?: boolean;
  };
}

/**
 * add_ideas
 * @description Adds the specified ideas to the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddIdeas {
  name: "add_ideas";
  args: {
    idea?: string;
  };
}

/**
 * add_timed_idea
 * @description Adds the specified ideas to the current scope for the specified number of days.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddTimedIdea {
  name: "add_timed_idea";
  args: {
    idea?: string;
    days?: string;
    months?: string;
    years?: string;
  };
}

/**
 * modify_timed_idea
 * @description Extends or shortens the duration of the timed idea by the specified amount.
 * @since 1.0
 * @scope {country}
 */
export interface EffectModifyTimedIdea {
  name: "modify_timed_idea";
  args: {
    idea?: string;
    days?: string;
    months?: string;
    years?: string;
  };
}

/**
 * swap_ideas
 * @description Switches two ideas with a tooltip displaying any modifier differences between them.
 * @since 1.3
 * @scope {country}
 */
export interface EffectSwapIdeas {
  name: "swap_ideas";
  args: {
    add_idea?: string;
    remove_idea?: string;
  };
}

/**
 * remove_ideas
 * @description Removes the specified idea from the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectRemoveIdeas {
  name: "remove_ideas";
  args: {
    idea?: string;
  };
}

/**
 * remove_ideas_with_trait
 * @description Removes all ideas for the current scope that use the specified trait.
 * @since 1.0
 * @scope {country}
 */
export interface EffectRemoveIdeasWithTrait {
  name: "remove_ideas_with_trait";
  args: {
    trait?: string;
  };
}

/**
 * show_ideas_tooltip
 * @description Displays the specified idea in the tooltip for the current effect scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectShowIdeasTooltip {
  name: "show_ideas_tooltip";
  args: {
    idea?: string;
  };
}

/**
 * load_oob
 * @description Loads the specified order of battle for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectLoadOob {
  name: "load_oob";
  args: {
    name?: string;
  };
}

/**
 * division_template
 * @description Creates and adds the specified division template to the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectDivisionTemplate {
  name: "division_template";
  args: {
    name?: string;
    regiments?: string;
    support?: string;
    division_names_group?: string;
    is_locked?: boolean;
    force_allow_recruiting?: boolean;
    division_cap?: number;
    priority?: number;
    template_counter?: number;
    override_model?: string;
  };
}

/**
 * create_colonial_division_template
 * @description Create a colonial division template for overlord/owner.
 * @since 1.15
 * @scope {country}
 */
export interface EffectCreateColonialDivisionTemplate {
  name: "create_colonial_division_template";
  args: {
    subject?: string;
    division_template?: string;
  };
}

/**
 * add_units_to_division_template
 * @description Adds the specified brigades to first available slots of specified columns to the template.
 * @since 1.0
 * @scope {country | division}
 */
export interface EffectAddUnitsToDivisionTemplate {
  name: "add_units_to_division_template";
  args: {
    template_name?: string;
    regiments?: string;
    support?: string;
  };
}

/**
 * set_division_template_lock
 * @description Toggles the locked status on a division template for the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectSetDivisionTemplateLock {
  name: "set_division_template_lock";
  args: {
    division_template?: string;
    is_locked?: boolean;
  };
}

/**
 * country_lock_all_division_template
 * @description Locks all division templates for the current scope.
 * @since 1.9
 * @scope {country}
 */
export interface EffectCountryLockAllDivisionTemplate {
  name: "country_lock_all_division_template";
  args: {
    is_locked?: boolean;
    desc?: string;
  };
}

/**
 * set_division_force_allow_recruiting
 * @description Changes whether it's possible to recruit divisions of a locked template without unlocking the template.
 * @since 1.12
 * @scope {country}
 */
export interface EffectSetDivisionForceAllowRecruiting {
  name: "set_division_force_allow_recruiting";
  args: {
    division_template?: string;
    force_allow_recruiting?: boolean;
  };
}

/**
 * set_division_template_cap
 * @description Sets the cap of a division template.
 * @since 1.12
 * @scope {country}
 */
export interface EffectSetDivisionTemplateCap {
  name: "set_division_template_cap";
  args: {
    division_template?: string;
    division_cap?: number;
  };
}

/**
 * clear_division_template_cap
 * @description Clears the cap on the template, allowing it to have an unlimited amount of divisions.
 * @since 1.12
 * @scope {country}
 */
export interface EffectClearDivisionTemplateCap {
  name: "clear_division_template_cap";
  args: {
    division_template?: string;
  };
}

/**
 * delete_unit_template_and_units
 * @description Deletes the specified division template and all units using it for the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectDeleteUnitTemplateAndUnits {
  name: "delete_unit_template_and_units";
  args: {
    division_template?: string;
    disband?: boolean;
  };
}

/**
 * delete_unit
 * @description Deletes all units that meet the filters.
 * @since 1.5
 * @scope {country}
 */
export interface EffectDeleteUnit {
  name: "delete_unit";
  args: {
    state?: number;
    division_template?: string;
    id?: number;
    disband?: boolean;
  };
}

/**
 * delete_units
 * @description Deletes all units with a certain template.
 * @since 1.9
 * @scope {country}
 */
export interface EffectDeleteUnits {
  name: "delete_units";
  args: {
    division_template?: string;
    disband?: boolean;
  };
}

/**
 * create_railway_gun
 * @description Creates a railway gun.
 * @since 1.11
 * @scope {country}
 */
export interface EffectCreateRailwayGun {
  name: "create_railway_gun";
  args: {
    equipment?: string;
    name?: string;
    location?: string;
  };
}

/**
 * teleport_railway_guns_to_deploy_province
 * @description Teleports all railway guns to the province where they get deployed.
 * @since 1.11
 * @scope {country}
 */
export interface EffectTeleportRailwayGunsToDeployProvince {
  name: "teleport_railway_guns_to_deploy_province";
  args: {
    value?: boolean;
  };
}

/**
 * add_unit_bonus
 * @description Adds permanent subunit and subunit category bonuses for country.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddUnitBonus {
  name: "add_unit_bonus";
  args: {
    unit?: string;
  };
}

/**
 * set_equipment_fraction
 * @description Reduces the overall equipment stockpile by the specified fraction.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetEquipmentFraction {
  name: "set_equipment_fraction";
  args: {
    fraction?: string;
  };
}

/**
 * add_equipment_to_stockpile
 * @description Edits the equipment stockpile of the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddEquipmentToStockpile {
  name: "add_equipment_to_stockpile";
  args: {
    type?: string;
    amount?: string;
    producer?: string;
    variant_name?: string;
  };
}

/**
 * send_equipment
 * @description Sends the specified amount of equipment to the specified target.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSendEquipment {
  name: "send_equipment";
  args: {
    equipment?: string;
    amount?: string;
    target?: string;
  };
}

/**
 * send_equipment_fraction
 * @description Sends the specified fraction of equipment to the specified target.
 * @since 1.9
 * @scope {country}
 */
export interface EffectSendEquipmentFraction {
  name: "send_equipment_fraction";
  args: {
    value?: number;
    target?: string;
  };
}

/**
 * create_production_license
 * @description Grants the specified country a license to produce the specified equipment from the current scope.
 * @since 1.4
 * @scope {country}
 */
export interface EffectCreateProductionLicense {
  name: "create_production_license";
  args: {
    target?: string;
    cost_factor?: number;
    equipment?: string;
  };
}

/**
 * add_equipment_subsidy
 * @description Creates an equipment subsidy on the international market.
 * @since 1.13
 * @scope {country}
 */
export interface EffectAddEquipmentSubsidy {
  name: "add_equipment_subsidy";
  args: {
    cic?: number;
    equipment_type?: string;
    seller_tags?: string;
    seller_trigger?: string;
  };
}

/**
 * add_cic
 * @description Modifies the economic capacity bank on the international market.
 * @since 1.13
 * @scope {country}
 */
export interface EffectAddCic {
  name: "add_cic";
  args: {
    amount?: number;
  };
}

/**
 * create_equipment_variant
 * @description Creates the specified equipment variant for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectCreateEquipmentVariant {
  name: "create_equipment_variant";
  args: {
    name?: string;
    type?: string;
    parent_version?: number;
    show_position?: boolean;
    obsolete?: boolean;
    mark_older_equipment_obsolete?: boolean;
    name_group?: string;
    role_icon_index?: number;
    model?: string;
    icon?: string;
    design_team?: string;
    allow_without_tech?: boolean;
    upgrades?: string;
    modules?: string;
  };
}

/**
 * add_equipment_production
 * @description Starts a production line for the specified equipment for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddEquipmentProduction {
  name: "add_equipment_production";
  args: {
    amount?: number;
    requested_factories?: number;
    progress?: number;
    efficiency?: number;
    name?: string;
    industrial_manufacturer?: string;
    equipment?: string;
  };
}

/**
 * add_design_template_bonus
 * @description Add free bonus design discount to given types with a set of uses.
 * @since 1.15
 * @scope {country}
 */
export interface EffectAddDesignTemplateBonus {
  name: "add_design_template_bonus";
  args: {
    name?: string;
    uses?: number;
    cost_factor?: number;
    equipment?: string;
  };
}

/**
 * add_equipment_bonus
 * @description Adds the specified equipment bonuses to the country.
 * @since 1.15
 * @scope {country}
 */
export interface EffectAddEquipmentBonus {
  name: "add_equipment_bonus";
  args: {
    project?: string;
    name?: string;
    bonus?: string;
  };
}

/**
 * set_equipment_version_number
 * @description Changes current version number for a given equipment type to N.
 * @since 1.16
 * @scope {country}
 */
export interface EffectSetEquipmentVersionNumber {
  name: "set_equipment_version_number";
  args: {
    type?: string;
    version?: number;
  };
}

/**
 * destroy_ships
 * @description Destroys the specified type and amount of ships controlled by the current scope.
 * @since 1.5
 * @scope {country}
 */
export interface EffectDestroyShips {
  name: "destroy_ships";
  args: {
    type?: string;
    count?: number;
  };
}

/**
 * transfer_navy
 * @description Transfers the current scope navy to the specified country.
 * @since 1.5
 * @scope {country}
 */
export interface EffectTransferNavy {
  name: "transfer_navy";
  args: {
    target?: string;
  };
}

/**
 * transfer_ship
 * @description Transfers the specified type of ship from the current scope to the specified country.
 * @since 1.4
 * @scope {country}
 */
export interface EffectTransferShip {
  name: "transfer_ship";
  args: {
    type?: string;
    target?: string;
    prefer_name?: string;
    exclude_refitting?: boolean;
  };
}

/**
 * create_ship
 * @description Create a ship from another country and assign it to the reserve fleet.
 * @since 1.9
 * @scope {country}
 */
export interface EffectCreateShip {
  name: "create_ship";
  args: {
    type?: string;
    equipment_variant?: string;
    creator?: string;
    name?: string;
    amount?: number;
  };
}

/**
 * add_mines
 * @description Add mines to a strategic region.
 * @since 1.6
 * @scope {country}
 */
export interface EffectAddMines {
  name: "add_mines";
  args: {
    region?: number;
    amount?: number;
  };
}

/**
 * add_ace
 * @description Adds an ace for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectAddAce {
  name: "add_ace";
  args: {
    name?: string;
    surname?: string;
    callsign?: string;
    type?: string;
    is_female?: boolean;
  };
}

/**
 * create_intelligence_agency
 * @description Creates an Intelligence Agency.
 * @since 1.9
 * @scope {country}
 */
export interface EffectCreateIntelligenceAgency {
  name: "create_intelligence_agency";
  args: {
    name?: string;
    icon?: string;
  };
}

/**
 * upgrade_intelligence_agency
 * @description Unlocks an Intelligence Agency Upgrade.
 * @since 1.9
 * @scope {country}
 */
export interface EffectUpgradeIntelligenceAgency {
  name: "upgrade_intelligence_agency";
  args: {
    upgrade?: string;
  };
}

/**
 * add_decryption
 * @description Adds decryption towards the target country.
 * @since 1.9
 * @scope {country}
 */
export interface EffectAddDecryption {
  name: "add_decryption";
  args: {
    target?: string;
    amount?: number;
    ratio?: number;
  };
}

/**
 * add_intel
 * @description Adds the specified amount of intel towards the specified country.
 * @since 1.9
 * @scope {country}
 */
export interface EffectAddIntel {
  name: "add_intel";
  args: {
    target?: string;
    civilian_intel?: number;
    army_intel?: number;
    navy_intel?: number;
    airforce_intel?: number;
  };
}

/**
 * add_operation_token
 * @description Adds an operation token towards the country.
 * @since 1.9
 * @scope {country}
 */
export interface EffectAddOperationToken {
  name: "add_operation_token";
  args: {
    tag?: string;
    token?: string;
  };
}

/**
 * remove_operation_token
 * @description Removes an operation token from the country.
 * @since 1.9
 * @scope {country}
 */
export interface EffectRemoveOperationToken {
  name: "remove_operation_token";
  args: {
    tag?: string;
    token?: string;
  };
}

/**
 * capture_operative
 * @description Captures the specified operative.
 * @since 1.9
 * @scope {country}
 */
export interface EffectCaptureOperative {
  name: "capture_operative";
  args: {
    operative?: string;
    ignore_death_chance?: boolean;
  };
}

/**
 * create_operative_leader
 * @description Creates an operative for the current scope with the specified attributes.
 * @since 1.9
 * @scope {country}
 */
export interface EffectCreateOperativeLeader {
  name: "create_operative_leader";
  args: {
    bypass_recruitment?: boolean;
    available_to_spy_master?: boolean;
    portrait_tag_override?: boolean;
    name?: string;
    GFX?: string;
    nationalities?: string;
    traits?: string;
    gender?: string;
  };
}

/**
 * free_operative
 * @description Frees the specifies operative.
 * @since 1.9
 * @scope {country}
 */
export interface EffectFreeOperative {
  name: "free_operative";
  args: {
    operative?: string;
  };
}

/**
 * free_random_operative
 * @description Frees one random captured operative or all of them.
 * @since 1.9
 * @scope {country}
 */
export interface EffectFreeRandomOperative {
  name: "free_random_operative";
  args: {
    captured_by?: string;
    all?: boolean;
  };
}

/**
 * kill_operative
 * @description Kills the targeted operative.
 * @since 1.9
 * @scope {country}
 */
export interface EffectKillOperative {
  name: "kill_operative";
  args: {
    operative?: string;
  };
}

/**
 * turn_operative
 * @description Turns the targeted operative against their own country.
 * @since 1.9
 * @scope {country}
 */
export interface EffectTurnOperative {
  name: "turn_operative";
  args: {
    operative?: string;
  };
}

/**
 * steal_random_tech_bonus
 * @description Steals a random tech bonus from the specified country.
 * @since 1.9
 * @scope {country}
 */
export interface EffectStealRandomTechBonus {
  name: "steal_random_tech_bonus";
  args: {
    category?: string;
    folder?: string;
    ahead_reduction?: number;
    bonus?: number;
    base_bonus?: number;
    instant?: boolean;
    dynamic?: boolean;
    name?: string;
    target?: string;
    uses?: number;
  };
}

/**
 * set_nationality
 * @description Switches the specified character to the specified country.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectSetNationality {
  name: "set_nationality";
  args: {
    target_country?: string;
    character?: string;
  };
}

/**
 * retire_character
 * @description Retires the character, removing every role they hold.
 * @since 1.11
 * @scope {country}
 */
export interface EffectRetireCharacter {
  name: "retire_character";
  args: {
    character?: string;
  };
}

/**
 * set_character_name
 * @description Sets the new name for the target character.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectSetCharacterName {
  name: "set_character_name";
  args: {
    character?: string;
    name?: string;
  };
}

/**
 * character_list_tooltip
 * @description Displays a list of every character meeting the specified limitation.
 * @since 1.11
 * @scope {country}
 */
export interface EffectCharacterListTooltip {
  name: "character_list_tooltip";
  args: {
    limit?: string;
    random_select_amount?: number;
  };
}

/**
 * add_trait
 * @description Adds the specified country leader trait to the character.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectAddTrait {
  name: "add_trait";
  args: {
    character?: string;
    slot?: string;
    ideology?: string;
    trait?: string;
  };
}

/**
 * remove_trait
 * @description Removes the specified trait from the character.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectRemoveTrait {
  name: "remove_trait";
  args: {
    character?: string;
    slot?: string;
    ideology?: string;
    trait?: string;
  };
}

/**
 * create_corps_commander
 * @description Creates a commander for the current scope with the specified attributes.
 * @since 1.0
 * @scope {country}
 */
export interface EffectCreateCorpsCommander {
  name: "create_corps_commander";
  args: {
    name?: string;
    picture?: string;
    skill?: number;
    attack_skill?: number;
    defense_skill?: number;
    planning_skill?: number;
    logistics_skill?: number;
    traits?: string;
    female?: boolean;
    legacy_id?: number;
  };
}

/**
 * create_field_marshal
 * @description Creates a field marshal for the current scope with the specified attributes.
 * @since 1.0
 * @scope {country}
 */
export interface EffectCreateFieldMarshal {
  name: "create_field_marshal";
  args: {
    name?: string;
    picture?: string;
    skill?: number;
    attack_skill?: number;
    defense_skill?: number;
    planning_skill?: number;
    logistics_skill?: number;
    traits?: string;
    female?: boolean;
    legacy_id?: number;
  };
}

/**
 * create_navy_leader
 * @description Creates a naval leader for the current scope with the specified attributes.
 * @since 1.0
 * @scope {country}
 */
export interface EffectCreateNavyLeader {
  name: "create_navy_leader";
  args: {
    name?: string;
    picture?: string;
    skill?: number;
    attack_skill?: number;
    defense_skill?: number;
    maneuvering_skill?: number;
    coordination_skill?: number;
    traits?: string;
    female?: boolean;
    legacy_id?: number;
  };
}

/**
 * remove_unit_leader
 * @description Removes the specified unit leader by their legacy ID.
 * @since 1.0
 * @scope {country}
 */
export interface EffectRemoveUnitLeader {
  name: "remove_unit_leader";
  args: {
    id?: number;
  };
}

/**
 * add_corps_commander_role
 * @description Sets the specified character to also act as a corps commander.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectAddCorpsCommanderRole {
  name: "add_corps_commander_role";
  args: {
    character?: string;
    skill?: number;
    attack_skill?: number;
    defense_skill?: number;
    planning_skill?: number;
    logistics_skill?: number;
  };
}

/**
 * add_field_marshal_role
 * @description Sets the specified character to also act as a field marshal.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectAddFieldMarshalRole {
  name: "add_field_marshal_role";
  args: {
    character?: string;
    skill?: number;
    attack_skill?: number;
    defense_skill?: number;
    planning_skill?: number;
    logistics_skill?: number;
  };
}

/**
 * add_naval_commander_role
 * @description Sets the specified character to also act as an admiral.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectAddNavalCommanderRole {
  name: "add_naval_commander_role";
  args: {
    character?: string;
    skill?: number;
    attack_skill?: number;
    defense_skill?: number;
    maneuvering_skill?: number;
    coordination_skill?: number;
  };
}

/**
 * show_unit_leaders_tooltip
 * @description Shows the name of the specified character as a tooltip.
 * @since 1.11
 * @scope {country}
 */
export interface EffectShowUnitLeadersTooltip {
  name: "show_unit_leaders_tooltip";
  args: {
    character?: string;
  };
}

/**
 * create_country_leader
 * @description Creates a country leader with specified attributes.
 * @since 1.0
 * @scope {country}
 */
export interface EffectCreateCountryLeader {
  name: "create_country_leader";
  args: {
    name?: string;
    desc?: string;
    picture?: string;
    expire?: string;
    ideology?: string;
    female?: boolean;
    traits?: string;
  };
}

/**
 * add_country_leader_role
 * @description Sets the specified character to also act as a country leader.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectAddCountryLeaderRole {
  name: "add_country_leader_role";
  args: {
    character?: string;
    promote_leader?: boolean;
    country_leader?: string;
  };
}

/**
 * promote_character
 * @description Promotes a character to the leader of their political party.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectPromoteCharacter {
  name: "promote_character";
  args: {
    character?: string;
    ideology?: string;
  };
}

/**
 * remove_country_leader_role
 * @description Removes a country leader role from a character.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectRemoveCountryLeaderRole {
  name: "remove_country_leader_role";
  args: {
    character?: string;
    ideology?: string;
  };
}

/**
 * kill_ideology_leader
 * @description Kills the country leader of the designated ideology for the current scope.
 * @since 1.9
 * @scope {country}
 */
export interface EffectKillIdeologyLeader {
  name: "kill_ideology_leader";
  args: {
    ideology?: string;
  };
}

/**
 * retire_ideology_leader
 * @description Retires and removes the country leader of the ideology party for the current scope.
 * @since 1.9
 * @scope {country}
 */
export interface EffectRetireIdeologyLeader {
  name: "retire_ideology_leader";
  args: {
    ideology?: string;
  };
}

/**
 * kill_country_leader
 * @description Kills the country leader for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectKillCountryLeader {
  name: "kill_country_leader";
  args: {
    value?: boolean;
  };
}

/**
 * retire_country_leader
 * @description Retires and removes the country leader as head of their party for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectRetireCountryLeader {
  name: "retire_country_leader";
  args: {
    value?: boolean;
  };
}

/**
 * set_country_leader_ideology
 * @description Changes the country leader's government type for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetCountryLeaderIdeology {
  name: "set_country_leader_ideology";
  args: {
    government?: string;
  };
}

/**
 * set_country_leader_description
 * @description Changes the country leader's description.
 * @since 1.9.1
 * @scope {country}
 */
export interface EffectSetCountryLeaderDescription {
  name: "set_country_leader_description";
  args: {
    ideology?: string;
    desc?: string;
  };
}

/**
 * set_country_leader_name
 * @description Changes the country leader's name.
 * @since 1.9.1
 * @scope {country}
 */
export interface EffectSetCountryLeaderName {
  name: "set_country_leader_name";
  args: {
    ideology?: string;
    name?: string;
  };
}

/**
 * set_country_leader_portrait
 * @description Changes the country leader's portrait.
 * @since 1.9.1
 * @scope {country}
 */
export interface EffectSetCountryLeaderPortrait {
  name: "set_country_leader_portrait";
  args: {
    ideology?: string;
    portrait?: string;
  };
}

/**
 * add_country_leader_trait
 * @description Adds the specified trait to the current country's country leader.
 * @since 1.0
 * @scope {country | character}
 */
export interface EffectAddCountryLeaderTrait {
  name: "add_country_leader_trait";
  args: {
    trait?: string;
    ideology?: string;
  };
}

/**
 * remove_country_leader_trait
 * @description Removes the specified trait from the current scope's country leader.
 * @since 1.0
 * @scope {country}
 */
export interface EffectRemoveCountryLeaderTrait {
  name: "remove_country_leader_trait";
  args: {
    trait?: string;
  };
}

/**
 * swap_ruler_traits
 * @description Swaps traits.
 * @since 1.6
 * @scope {country}
 */
export interface EffectSwapRulerTraits {
  name: "swap_ruler_traits";
  args: {
    remove?: string;
    add?: string;
  };
}

/**
 * swap_country_leader_traits
 * @description Swaps traits of the current character.
 * @since 1.11
 * @scope {character}
 */
export interface EffectSwapCountryLeaderTraits {
  name: "swap_country_leader_traits";
  args: {
    remove?: string;
    add?: string;
    ideology?: string;
  };
}

/**
 * activate_advisor
 * @description Hires an advisor, placing them into their respective slot.
 * @since 1.11
 * @scope {country}
 */
export interface EffectActivateAdvisor {
  name: "activate_advisor";
  args: {
    character?: string;
  };
}

/**
 * deactivate_advisor
 * @description Dismisses an advisor from their respective slot, leaving it empty.
 * @since 1.11
 * @scope {country}
 */
export interface EffectDeactivateAdvisor {
  name: "deactivate_advisor";
  args: {
    character?: string;
  };
}

/**
 * add_advisor_role
 * @description Sets the specified character to also act as an advisor.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectAddAdvisorRole {
  name: "add_advisor_role";
  args: {
    character?: string;
    activate?: boolean;
    advisor?: string;
  };
}

/**
 * remove_advisor_role
 * @description Removes the specified advisor role from the character.
 * @since 1.11
 * @scope {country | character}
 */
export interface EffectRemoveAdvisorRole {
  name: "remove_advisor_role";
  args: {
    character?: string;
    slot?: string;
  };
}

/**
 * set_can_be_fired_in_advisor_role
 * @description Changes the can_be_fired attribute of the advisor.
 * @since 1.12.8
 * @scope {country | character}
 */
export interface EffectSetCanBeFiredInAdvisorRole {
  name: "set_can_be_fired_in_advisor_role";
  args: {
    character?: string;
    slot?: string;
    value?: boolean;
  };
}

/**
 * add_scientist_role
 * @description Adds the scientist role to a character.
 * @since 1.15
 * @scope {country | character}
 */
export interface EffectAddScientistRole {
  name: "add_scientist_role";
  args: {
    character?: string;
    scientist?: string;
  };
}

/**
 * remove_scientist_role
 * @description Remove the scientist role from a character.
 * @since 1.15
 * @scope {country | character}
 */
export interface EffectRemoveScientistRole {
  name: "remove_scientist_role";
  args: {
    character?: string;
  };
}

/**
 * generate_scientist_character
 * @description Generate a new character with a scientist role and recruit it in the country in scope.
 * @since 1.15
 * @scope {country}
 */
export interface EffectGenerateScientistCharacter {
  name: "generate_scientist_character";
  args: {
    portrait?: string;
    portrait_tag_override?: string;
    gender?: string;
    skills?: string;
    traits?: string;
  };
}

/**
 * show_mio_tooltip
 * @description Displays a tooltip that shows the name of the MIO and its initial trait.
 * @since 1.13
 * @scope {country}
 */
export interface EffectShowMioTooltip {
  name: "show_mio_tooltip";
  args: {
    mio?: string;
  };
}

/**
 * unlock_military_industrial_organization_tooltip
 * @description Display a tooltip saying the MIO is made available.
 * @since 1.13
 * @scope {country}
 */
export interface EffectUnlockMilitaryIndustrialOrganizationTooltip {
  name: "unlock_military_industrial_organization_tooltip";
  args: {
    mio?: string;
  };
}

/**
 * unlock_mio_policy_tooltip
 * @description Displays a tooltip that says that the policy is made available.
 * @since 1.13
 * @scope {country}
 */
export interface EffectUnlockMioPolicyTooltip {
  name: "unlock_mio_policy_tooltip";
  args: {
    policy?: string;
    show_modifiers?: boolean;
  };
}

/**
 * add_mio_policy_cost
 * @description Modifies the base cost of a MIO policy.
 * @since 1.13
 * @scope {country}
 */
export interface EffectAddMioPolicyCost {
  name: "add_mio_policy_cost";
  args: {
    policy?: string;
    value?: number;
  };
}

/**
 * set_mio_policy_cost
 * @description Modifies the base cost of a MIO policy.
 * @since 1.13
 * @scope {country}
 */
export interface EffectSetMioPolicyCost {
  name: "set_mio_policy_cost";
  args: {
    policy?: string;
    value?: number;
  };
}

/**
 * add_mio_policy_cooldown
 * @description Modifies the base length of a MIO policy cooldown.
 * @since 1.13
 * @scope {country}
 */
export interface EffectAddMioPolicyCooldown {
  name: "add_mio_policy_cooldown";
  args: {
    policy?: string;
    value?: number;
  };
}

/**
 * set_mio_policy_cooldown
 * @description Modifies the base length of a MIO policy cooldown.
 * @since 1.13
 * @scope {country}
 */
export interface EffectSetMioPolicyCooldown {
  name: "set_mio_policy_cooldown";
  args: {
    policy?: string;
    value?: number;
  };
}

/**
 * complete_special_project
 * @description Complete a special project for the country in scope.
 * @since 1.15
 * @scope {country}
 */
export interface EffectCompleteSpecialProject {
  name: "complete_special_project";
  args: {
    project?: string;
    scientist?: string;
    state?: string;
    iteration_output?: string;
    show_modifiers?: boolean;
  };
}

/**
 * add_breakthrough_points
 * @description Add breakthrough points to one specialization or all for a country scope.
 * @since 1.15
 * @scope {country}
 */
export interface EffectAddBreakthroughPoints {
  name: "add_breakthrough_points";
  args: {
    specialization?: string;
    value?: number;
  };
}

/**
 * add_breakthrough_progress
 * @description Add breakthrough progress to one specialization or all for a country scope.
 * @since 1.15
 * @scope {country}
 */
export interface EffectAddBreakthroughProgress {
  name: "add_breakthrough_progress";
  args: {
    specialization?: string;
    value?: number;
  };
}

/**
 * career_profile_step_missiolini
 * @description Step completed Mussolini missions by one for the career profile.
 * @since 1.0
 * @scope {country}
 */
export interface EffectCareerProfileStepMissiolini {
  name: "career_profile_step_missiolini";
  args: {
    value?: boolean;
  };
}

/**
 * recruit_character
 * @description Initially assigns the specified character to the current country.
 * @since 1.11
 * @scope {country}
 */
export interface EffectRecruitCharacter {
  name: "recruit_character";
  args: {
    character?: string;
  };
}

/**
 * generate_character
 * @description Generates a character for current country.
 * @since 1.11
 * @scope {country}
 */
export interface EffectGenerateCharacter {
  name: "generate_character";
  args: {
    token_base?: string;
    name?: string;
  };
}

/**
 * set_oob
 * @description Sets the order of battle to be used for the current country's divisions.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetOob {
  name: "set_oob";
  args: {
    name?: string;
  };
}

/**
 * set_naval_oob
 * @description Sets the naval order of battle to be used for the current country's divisions.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetNavalOob {
  name: "set_naval_oob";
  args: {
    name?: string;
  };
}

/**
 * set_air_oob
 * @description Sets the air order of battle to be used for the current country's divisions.
 * @since 1.12
 * @scope {country}
 */
export interface EffectSetAirOob {
  name: "set_air_oob";
  args: {
    name?: string;
  };
}

/**
 * set_keyed_oob
 * @description Sets the keyed order of battle to be used for the current country's divisions.
 * @since 1.0
 * @scope {country}
 */
export interface EffectSetKeyedOob {
  name: "set_keyed_oob";
  args: {
    key?: string;
    name?: string;
  };
}

/**
 * get_highest_scored_country_temp
 * @description Calculates the highest scored country that is defined in a country scorer and sets it to a variable.
 * @since 1.0
 * @scope {country}
 */
export interface EffectGetHighestScoredCountryTemp {
  name: "get_highest_scored_country_temp";
  args: {
    scorer?: string;
    var?: string;
  };
}

/**
 * get_sorted_scored_countries_temp
 * @description Calculates & sorts all countries in a country scorer and stores them and their scores in temp arrays.
 * @since 1.0
 * @scope {country}
 */
export interface EffectGetSortedScoredCountriesTemp {
  name: "get_sorted_scored_countries_temp";
  args: {
    scorer?: string;
    array?: string;
    scores?: string;
  };
}

/**
 * get_supply_vehicles
 * @description Sets a variable to the number of supply vehicles in stockpile or that are needed.
 * @since 1.0
 * @scope {country}
 */
export interface EffectGetSupplyVehicles {
  name: "get_supply_vehicles";
  args: {
    var?: string;
    type?: string;
    need?: boolean;
  };
}

/**
 * get_supply_vehicles_temp
 * @description Sets a temp variable to the number of supply vehicles in stockpile or that are needed.
 * @since 1.0
 * @scope {country}
 */
export interface EffectGetSupplyVehiclesTemp {
  name: "get_supply_vehicles_temp";
  args: {
    var?: string;
    type?: string;
    need?: boolean;
  };
}

/**
 * state_event
 * @description Fires the specified event for the current state.
 * @since 1.0
 * @scope {state}
 */
export interface EffectStateEvent {
  name: "state_event";
  args: {
    id?: string;
    days?: string;
    hours?: string;
    random?: string;
    random_days?: string;
    trigger_for?: string;
  };
}

/**
 * set_state_flag
 * @description Defines a state flag.
 * @since 1.0
 * @scope {state}
 */
export interface EffectSetStateFlag {
  name: "set_state_flag";
  args: {
    flag?: string;
    days?: number;
    value?: number;
  };
}

/**
 * clr_state_flag
 * @description Clears a defined state flag.
 * @since 1.0
 * @scope {state}
 */
export interface EffectClrStateFlag {
  name: "clr_state_flag";
  args: {
    flag?: string;
  };
}

/**
 * modify_state_flag
 * @description Adds an integer value to a flag.
 * @since 1.3
 * @scope {state}
 */
export interface EffectModifyStateFlag {
  name: "modify_state_flag";
  args: {
    flag?: string;
    value?: number;
    days?: number;
  };
}

/**
 * set_state_name
 * @description Changes the current state's name to the specified name.
 * @since 1.3
 * @scope {state}
 */
export interface EffectSetStateName {
  name: "set_state_name";
  args: {
    name?: string;
  };
}

/**
 * reset_state_name
 * @description Resets any changes to the current state's name.
 * @since 1.3
 * @scope {state}
 */
export interface EffectResetStateName {
  name: "reset_state_name";
  args: {
    value?: boolean;
  };
}

/**
 * add_claim_by
 * @description Adds a claim for the specified country on the current scope.
 * @since 1.0
 * @scope {state}
 */
export interface EffectAddClaimBy {
  name: "add_claim_by";
  args: {
    country?: string;
  };
}

/**
 * remove_claim_by
 * @description Removes a claim by the specified country on the current scope.
 * @since 1.0
 * @scope {state}
 */
export interface EffectRemoveClaimBy {
  name: "remove_claim_by";
  args: {
    country?: string;
  };
}

/**
 * add_core_of
 * @description Adds a core for the specified country on the current scope.
 * @since 1.0
 * @scope {state}
 */
export interface EffectAddCoreOf {
  name: "add_core_of";
  args: {
    country?: string;
  };
}

/**
 * remove_core_of
 * @description Removes a core for the specified country on the current scope.
 * @since 1.0
 * @scope {state}
 */
export interface EffectRemoveCoreOf {
  name: "remove_core_of";
  args: {
    country?: string;
  };
}

/**
 * set_demilitarized_zone
 * @description Makes the current scope a demilitarized zone.
 * @since 1.0
 * @scope {state}
 */
export interface EffectSetDemilitarizedZone {
  name: "set_demilitarized_zone";
  args: {
    value?: boolean;
  };
}

/**
 * set_state_category
 * @description Changes the current state category to the specified category.
 * @since 1.3
 * @scope {state}
 */
export interface EffectSetStateCategory {
  name: "set_state_category";
  args: {
    category?: string;
  };
}

/**
 * add_state_modifier
 * @description Adds a modifier to the current state.
 * @since 1.3
 * @scope {state}
 */
export interface EffectAddStateModifier {
  name: "add_state_modifier";
  args: {
    modifier?: string;
  };
}

/**
 * set_border_war
 * @description Enables Border War status for the current state.
 * @since 1.0
 * @scope {state}
 */
export interface EffectSetBorderWar {
  name: "set_border_war";
  args: {
    value?: boolean;
  };
}

/**
 * create_unit
 * @description Adds the specified division to the current state.
 * @since 1.3
 * @scope {state}
 */
export interface EffectCreateUnit {
  name: "create_unit";
  args: {
    division?: string;
    owner?: string;
    prioritize_location?: string;
    allow_spawning_on_enemy_provs?: boolean;
    count?: number;
    id?: number;
    country_score?: string;
    divisional_commander_xp?: number;
  };
}

/**
 * teleport_armies
 * @description Teleports all armies in the specified state if the owner of the armies meets the condition.
 * @since 1.9
 * @scope {state}
 */
export interface EffectTeleportArmies {
  name: "teleport_armies";
  args: {
    limit?: string;
    to_state_array?: string;
    to_province?: number;
    to_state?: number;
  };
}

/**
 * add_province_modifier
 * @description Adds a province modifier to the specified provinces in this state.
 * @since 1.6
 * @scope {state}
 */
export interface EffectAddProvinceModifier {
  name: "add_province_modifier";
  args: {
    static_modifiers?: string;
    province?: string;
    provinces?: string;
    days?: number;
  };
}

/**
 * remove_province_modifier
 * @description Removes a province modifier to the specified provinces in this state.
 * @since 1.6
 * @scope {state}
 */
export interface EffectRemoveProvinceModifier {
  name: "remove_province_modifier";
  args: {
    static_modifiers?: string;
    province?: string;
    provinces?: string;
  };
}

/**
 * add_victory_points
 * @description Adds victory points to a province.
 * @since 1.10
 * @scope {state}
 */
export interface EffectAddVictoryPoints {
  name: "add_victory_points";
  args: {
    province?: number;
    value?: number;
  };
}

/**
 * set_victory_points
 * @description Sets the number of victory point in a province.
 * @since 1.10
 * @scope {state}
 */
export interface EffectSetVictoryPoints {
  name: "set_victory_points";
  args: {
    province?: number;
    value?: number;
  };
}

/**
 * set_state_province_controller
 * @description Changes the controller of all provinces within that state controlled by countries that meet triggers.
 * @since 1.9
 * @scope {state}
 */
export interface EffectSetStateProvinceController {
  name: "set_state_province_controller";
  args: {
    controller?: string;
    limit?: string;
  };
}

/**
 * transfer_state_to
 * @description Sets owner and controller of the state to the given country.
 * @since 1.11
 * @scope {state}
 */
export interface EffectTransferStateTo {
  name: "transfer_state_to";
  args: {
    country?: string;
  };
}

/**
 * set_state_owner_to
 * @description Sets the owner of the state to the given country.
 * @since 1.11
 * @scope {state}
 */
export interface EffectSetStateOwnerTo {
  name: "set_state_owner_to";
  args: {
    country?: string;
  };
}

/**
 * set_state_controller_to
 * @description Sets the controller of the state to the given country.
 * @since 1.11
 * @scope {state}
 */
export interface EffectSetStateControllerTo {
  name: "set_state_controller_to";
  args: {
    country?: string;
  };
}

/**
 * add_extra_state_shared_building_slots
 * @description Changes the number of shared building slots for the current state.
 * @since 1.0
 * @scope {state}
 */
export interface EffectAddExtraStateSharedBuildingSlots {
  name: "add_extra_state_shared_building_slots";
  args: {
    amount?: string;
  };
}

/**
 * add_building_construction
 * @description Starts construction in the current state for the specified building.
 * @since 1.0
 * @scope {state}
 */
export interface EffectAddBuildingConstruction {
  name: "add_building_construction";
  args: {
    type?: string;
    level?: string;
    instant_build?: boolean;
    province?: string;
  };
}

/**
 * set_building_level
 * @description Sets the specified building to the current state.
 * @since 1.4
 * @scope {state}
 */
export interface EffectSetBuildingLevel {
  name: "set_building_level";
  args: {
    type?: string;
    level?: string;
    instant_build?: boolean;
    province?: string;
  };
}

/**
 * remove_building
 * @description Removes the specified building in the current state.
 * @since 1.0
 * @scope {state}
 */
export interface EffectRemoveBuilding {
  name: "remove_building";
  args: {
    type?: string;
    tag?: string;
    level?: string;
  };
}

/**
 * construct_building_in_random_province
 * @description Set building level in a random province of state scope.
 * @since 1.15
 * @scope {state}
 */
export interface EffectConstructBuildingInRandomProvince {
  name: "construct_building_in_random_province";
  args: {
    building?: string;
    amount?: number;
  };
}

/**
 * add_compliance
 * @description Adds compliance to the specified state.
 * @since 1.9
 * @scope {state}
 */
export interface EffectAddCompliance {
  name: "add_compliance";
  args: {
    amount?: string;
  };
}

/**
 * add_resistance
 * @description Adds resistance to the specified state.
 * @since 1.9
 * @scope {state}
 */
export interface EffectAddResistance {
  name: "add_resistance";
  args: {
    amount?: string;
  };
}

/**
 * add_resistance_target
 * @description Increases resistance target in the specified state.
 * @since 1.9
 * @scope {state}
 */
export interface EffectAddResistanceTarget {
  name: "add_resistance_target";
  args: {
    id?: number;
    amount?: string;
    occupied?: string;
    occupier?: string;
    days?: string;
    tooltip?: string;
  };
}

/**
 * cancel_resistance
 * @description Cancels resistance activity for the current state.
 * @since 1.9
 * @scope {state}
 */
export interface EffectCancelResistance {
  name: "cancel_resistance";
  args: {
    value?: boolean;
  };
}

/**
 * force_disable_resistance
 * @description Disables resistance for the scoped state when the occupier is the specified country.
 * @since 1.9
 * @scope {state}
 */
export interface EffectForceDisableResistance {
  name: "force_disable_resistance";
  args: {
    clear?: boolean;
    occupier?: string;
    occupied?: string;
  };
}

/**
 * force_enable_resistance
 * @description Enables resistance for the scoped state when the occupier is the specified country.
 * @since 1.9
 * @scope {state}
 */
export interface EffectForceEnableResistance {
  name: "force_enable_resistance";
  args: {
    clear?: boolean;
    occupier?: string;
    occupied?: string;
  };
}

/**
 * remove_resistance_target
 * @description Removes a set resistance target increase in the specified state.
 * @since 1.9
 * @scope {state}
 */
export interface EffectRemoveResistanceTarget {
  name: "remove_resistance_target";
  args: {
    id?: string;
  };
}

/**
 * set_compliance
 * @description Sets compliance in the specified state.
 * @since 1.9
 * @scope {state}
 */
export interface EffectSetCompliance {
  name: "set_compliance";
  args: {
    amount?: string;
  };
}

/**
 * set_resistance
 * @description Sets resistance in the specified state.
 * @since 1.9
 * @scope {state}
 */
export interface EffectSetResistance {
  name: "set_resistance";
  args: {
    amount?: string;
  };
}

/**
 * start_resistance
 * @description Starts resistance in the specified state.
 * @since 1.9
 * @scope {state}
 */
export interface EffectStartResistance {
  name: "start_resistance";
  args: {
    target?: string;
  };
}

/**
 * set_garrison_strength
 * @description Sets the strength of the garrison in the specified state.
 * @since 1.9
 * @scope {state}
 */
export interface EffectSetGarrisonStrength {
  name: "set_garrison_strength";
  args: {
    strength?: number;
  };
}

/**
 * raid_reduce_project_progress_ratio
 * @description Reduce progress to the special project in state.
 * @since 1.15
 * @scope {state}
 */
export interface EffectRaidReduceProjectProgressRatio {
  name: "raid_reduce_project_progress_ratio";
  args: {
    ratio?: number;
  };
}

/**
 * set_character_flag
 * @description Defines a character flag.
 * @since 1.11
 * @scope {character}
 */
export interface EffectSetCharacterFlag {
  name: "set_character_flag";
  args: {
    flag?: string;
    days?: number;
    value?: number;
  };
}

/**
 * clr_character_flag
 * @description Clears a character flag.
 * @since 1.11
 * @scope {character}
 */
export interface EffectClrCharacterFlag {
  name: "clr_character_flag";
  args: {
    flag?: string;
  };
}

/**
 * modify_character_flag
 * @description Adds an integer value to a flag.
 * @since 1.11
 * @scope {character}
 */
export interface EffectModifyCharacterFlag {
  name: "modify_character_flag";
  args: {
    flag?: string;
    value?: number;
    days?: number;
  };
}

/**
 * retire
 * @description Retires the current character (removing them).
 * @since 1.5
 * @scope {character}
 */
export interface EffectRetire {
  name: "retire";
  args: {
    value?: boolean;
  };
}

/**
 * set_portraits
 * @description Changes the specified portraits of a character.
 * @since 1.11
 * @scope {character}
 */
export interface EffectSetPortraits {
  name: "set_portraits";
  args: {
    character?: string;
    army?: string;
    civilian?: string;
  };
}

/**
 * add_scientist_level
 * @description Add levels to a special project specialization for a scientist character in scope.
 * @since 1.15
 * @scope {character}
 */
export interface EffectAddScientistLevel {
  name: "add_scientist_level";
  args: {
    level?: string;
    specialization?: string;
  };
}

/**
 * injure_scientist_for_days
 * @description Injure a scientist for x amount of days to a scientist character in scope.
 * @since 1.15
 * @scope {character}
 */
export interface EffectInjureScientistForDays {
  name: "injure_scientist_for_days";
  args: {
    days?: string;
  };
}

/**
 * add_scientist_trait
 * @description Add a trait to a scientist character in scope.
 * @since 1.15
 * @scope {character}
 */
export interface EffectAddScientistTrait {
  name: "add_scientist_trait";
  args: {
    trait?: string;
  };
}

/**
 * add_scientist_xp
 * @description Add experience to a special project specialization for a scientist character in scope.
 * @since 1.15
 * @scope {character}
 */
export interface EffectAddScientistXp {
  name: "add_scientist_xp";
  args: {
    experience?: string;
    specialization?: string;
  };
}

/**
 * unit_leader_event
 * @description Fires the specified event for the owner of the current unit leader.
 * @since 1.5
 * @scope {character}
 */
export interface EffectUnitLeaderEvent {
  name: "unit_leader_event";
  args: {
    id?: string;
    days?: string;
    hours?: string;
    random?: string;
    random_days?: string;
  };
}

/**
 * set_unit_leader_flag
 * @description Defines a unit leader flag.
 * @since 1.5
 * @scope {character}
 */
export interface EffectSetUnitLeaderFlag {
  name: "set_unit_leader_flag";
  args: {
    flag?: string;
  };
}

/**
 * clr_unit_leader_flag
 * @description Clears a defined unit leader flag.
 * @since 1.5
 * @scope {character}
 */
export interface EffectClrUnitLeaderFlag {
  name: "clr_unit_leader_flag";
  args: {
    flag?: string;
  };
}

/**
 * modify_unit_leader_flag
 * @description Adds an integer value to a flag.
 * @since 1.5
 * @scope {character}
 */
export interface EffectModifyUnitLeaderFlag {
  name: "modify_unit_leader_flag";
  args: {
    flag?: string;
    value?: number;
    days?: number;
  };
}

/**
 * promote_leader
 * @description Promotes the current unit leader to Field Marshal (if Commander).
 * @since 1.5
 * @scope {character}
 */
export interface EffectPromoteLeader {
  name: "promote_leader";
  args: {
    value?: boolean;
  };
}

/**
 * demote_leader
 * @description Demotes the current unit leader to Commander (if Field Marshal).
 * @since 1.5
 * @scope {character}
 */
export interface EffectDemoteLeader {
  name: "demote_leader";
  args: {
    value?: boolean;
  };
}

/**
 * add_unit_leader_trait
 * @description Adds the specified trait to the current unit leader.
 * @since 1.0
 * @scope {character}
 */
export interface EffectAddUnitLeaderTrait {
  name: "add_unit_leader_trait";
  args: {
    trait?: string;
  };
}

/**
 * remove_unit_leader_trait
 * @description Removes the specified trait from the current unit leader.
 * @since 1.0
 * @scope {character}
 */
export interface EffectRemoveUnitLeaderTrait {
  name: "remove_unit_leader_trait";
  args: {
    trait?: string;
  };
}

/**
 * add_random_trait
 * @description Adds a random trait from the list to the character.
 * @since 1.5
 * @scope {character}
 */
export interface EffectAddRandomTrait {
  name: "add_random_trait";
  args: {
    traits?: string;
  };
}

/**
 * add_timed_unit_leader_trait
 * @description Adds the specified trait to the current unit leader for the specified duration.
 * @since 1.5
 * @scope {character}
 */
export interface EffectAddTimedUnitLeaderTrait {
  name: "add_timed_unit_leader_trait";
  args: {
    trait?: string;
    days?: number;
  };
}

/**
 * replace_unit_leader_trait
 * @description Replaces unit leader traits.
 * @since 1.5
 * @scope {character}
 */
export interface EffectReplaceUnitLeaderTrait {
  name: "replace_unit_leader_trait";
  args?: {};
}

/**
 * remove_exile_tag
 * @description Remove the exile tag on an army leader.
 * @since 1.6
 * @scope {character}
 */
export interface EffectRemoveExileTag {
  name: "remove_exile_tag";
  args: {
    value?: boolean;
  };
}

/**
 * gain_xp
 * @description Adds experience to the current unit leader.
 * @since 1.9
 * @scope {character}
 */
export interface EffectGainXp {
  name: "gain_xp";
  args: {
    amount?: number;
  };
}

/**
 * remove_unit_leader
 * @description Removes the current unit leader.
 * @since 1.0
 * @scope {character}
 */
export interface EffectRemoveUnitLeader {
  name: "remove_unit_leader";
  args: {
    value?: boolean;
  };
}

/**
 * remove_unit_leader_role
 * @description Removes every unit leader role from the character.
 * @since 1.11
 * @scope {character}
 */
export interface EffectRemoveUnitLeaderRole {
  name: "remove_unit_leader_role";
  args: {
    value?: boolean;
  };
}

/**
 * supply_units
 * @description Adds the specified amount of hours of supply to troops led by the current unit leader.
 * @since 1.5
 * @scope {character}
 */
export interface EffectSupplyUnits {
  name: "supply_units";
  args: {
    hours?: string;
  };
}

/**
 * add_max_trait
 * @description Adds the specified amount of assignable trait slots to the current unit leader.
 * @since 1.5
 * @scope {character}
 */
export interface EffectAddMaxTrait {
  name: "add_max_trait";
  args: {
    amount?: number;
  };
}

/**
 * add_skill_level
 * @description Adds skill to the current unit leader.
 * @since 1.5
 * @scope {character}
 */
export interface EffectAddSkillLevel {
  name: "add_skill_level";
  args: {
    amount?: number;
  };
}

/**
 * add_logistics
 * @description Adds logistics skill to the current unit leader.
 * @since 1.5
 * @scope {character}
 */
export interface EffectAddLogistics {
  name: "add_logistics";
  args: {
    amount?: number;
  };
}

/**
 * add_planning
 * @description Adds planning skill to the current unit leader.
 * @since 1.5
 * @scope {character}
 */
export interface EffectAddPlanning {
  name: "add_planning";
  args: {
    amount?: number;
  };
}

/**
 * add_defense
 * @description Adds defense skill to the current unit leader.
 * @since 1.5
 * @scope {character}
 */
export interface EffectAddDefense {
  name: "add_defense";
  args: {
    amount?: number;
  };
}

/**
 * add_attack
 * @description Adds attack skill to the current unit leader.
 * @since 1.5
 * @scope {character}
 */
export interface EffectAddAttack {
  name: "add_attack";
  args: {
    amount?: number;
  };
}

/**
 * add_coordination
 * @description Adds coordination skill to the current navy leader.
 * @since 1.5
 * @scope {character}
 */
export interface EffectAddCoordination {
  name: "add_coordination";
  args: {
    amount?: number;
  };
}

/**
 * add_maneuver
 * @description Adds maneuver skill to the current navy leader.
 * @since 1.5
 * @scope {character}
 */
export interface EffectAddManeuver {
  name: "add_maneuver";
  args: {
    amount?: number;
  };
}

/**
 * add_temporary_buff_to_units
 * @description Adds the specified combat buff to the current unit leader.
 * @since 1.5
 * @scope {character}
 */
export interface EffectAddTemporaryBuffToUnits {
  name: "add_temporary_buff_to_units";
  args: {
    combat_offense?: number;
    combat_breakthrough?: number;
    combat_defense?: number;
    combat_entrenchment?: number;
    org_damage_multiplier?: number;
    str_damage_multiplier?: number;
    war_support_reduction_on_damage?: number;
    cannot_retreat_while_attacking?: number;
    cannot_retreat_while_defending?: number;
    days?: number;
    tooltip?: string;
  };
}

/**
 * add_nationality
 * @description Adds the nationality to the current operative.
 * @since 1.9
 * @scope {character}
 */
export interface EffectAddNationality {
  name: "add_nationality";
  args: {
    tag?: string;
  };
}

/**
 * capture_operative
 * @description Makes the current operative be captured by a specific country.
 * @since 1.9
 * @scope {character}
 */
export interface EffectCaptureOperative {
  name: "capture_operative";
  args: {
    captured_by?: string;
    ignore_death_chance?: boolean;
  };
}

/**
 * force_operative_leader_into_hiding
 * @description Forces the current operative into hiding.
 * @since 1.9
 * @scope {character}
 */
export interface EffectForceOperativeLeaderIntoHiding {
  name: "force_operative_leader_into_hiding";
  args: {
    value?: boolean;
  };
}

/**
 * free_operative
 * @description Frees the current operative.
 * @since 1.9
 * @scope {character}
 */
export interface EffectFreeOperative {
  name: "free_operative";
  args: {
    captured_by?: string;
  };
}

/**
 * harm_operative_leader
 * @description Harms the current operative.
 * @since 1.9
 * @scope {character}
 */
export interface EffectHarmOperativeLeader {
  name: "harm_operative_leader";
  args: {
    amount?: number;
  };
}

/**
 * kill_operative
 * @description Kills the current operative.
 * @since 1.9
 * @scope {character}
 */
export interface EffectKillOperative {
  name: "kill_operative";
  args: {
    killed_by?: string;
  };
}

/**
 * turn_operative
 * @description Turns the current operative against their own country.
 * @since 1.9
 * @scope {character}
 */
export interface EffectTurnOperative {
  name: "turn_operative";
  args: {
    turned_by?: string;
  };
}

/**
 * operative_leader_event
 * @description Fires the specified event for the operative.
 * @since 1.9
 * @scope {character}
 */
export interface EffectOperativeLeaderEvent {
  name: "operative_leader_event";
  args: {
    id?: string;
    days?: string;
    hours?: string;
    random?: string;
    random_days?: string;
    originator?: string;
    recipient?: string;
    set_from?: string;
    set_from_from?: string;
    set_root?: string;
  };
}

/**
 * destroy_unit
 * @description Destroys the currently-scoped division.
 * @since 1.12
 * @scope {division}
 */
export interface EffectDestroyUnit {
  name: "destroy_unit";
  args: {
    value?: boolean;
  };
}

/**
 * add_history_entry
 * @description Creates an entry within the command history of a division.
 * @since 1.12
 * @scope {division}
 */
export interface EffectAddHistoryEntry {
  name: "add_history_entry";
  args: {
    key?: string;
    subject?: string;
    allow?: boolean;
  };
}

/**
 * change_division_template
 * @description Changes the template of the division to the specified one.
 * @since 1.12
 * @scope {division}
 */
export interface EffectChangeDivisionTemplate {
  name: "change_division_template";
  args: {
    division_template?: string;
  };
}

/**
 * add_random_valid_trait_from_unit
 * @description Adds a random valid unit trait to a unit leader.
 * @since 1.12
 * @scope {division}
 */
export interface EffectAddRandomValidTraitFromUnit {
  name: "add_random_valid_trait_from_unit";
  args: {
    character?: string;
  };
}

/**
 * add_unit_medal_to_latest_entry
 * @description Adds the specified medal to the latest entry within the unit's history.
 * @since 1.12
 * @scope {division}
 */
export interface EffectAddUnitMedalToLatestEntry {
  name: "add_unit_medal_to_latest_entry";
  args: {
    unit_medals?: string;
  };
}

/**
 * add_divisional_commander_xp
 * @description Adds the specified amount of experience to the divisional commander.
 * @since 1.12
 * @scope {division}
 */
export interface EffectAddDivisionalCommanderXp {
  name: "add_divisional_commander_xp";
  args: {
    amount?: number;
  };
}

/**
 * reseed_division_commander
 * @description Re-randomises the division commander using the given seed.
 * @since 1.12
 * @scope {division}
 */
export interface EffectReseedDivisionCommander {
  name: "reseed_division_commander";
  args: {
    seed?: number;
  };
}

/**
 * set_unit_organization
 * @description Changes the organisation of the unit.
 * @since 1.13
 * @scope {division}
 */
export interface EffectSetUnitOrganization {
  name: "set_unit_organization";
  args: {
    amount?: number;
  };
}

/**
 * add_mio_funds
 * @description Adds funds to the MIO.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectAddMioFunds {
  name: "add_mio_funds";
  args: {
    amount?: number;
  };
}

/**
 * set_mio_funds
 * @description Sets the funds of a MIO to the certain level.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectSetMioFunds {
  name: "set_mio_funds";
  args: {
    amount?: number;
  };
}

/**
 * add_mio_funds_gain_factor
 * @description Changes the base multiplier to MIO's funds.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectAddMioFundsGainFactor {
  name: "add_mio_funds_gain_factor";
  args: {
    amount?: number;
  };
}

/**
 * set_mio_funds_gain_factor
 * @description Changes the base multiplier to MIO's funds.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectSetMioFundsGainFactor {
  name: "set_mio_funds_gain_factor";
  args: {
    amount?: number;
  };
}

/**
 * add_mio_size
 * @description Adds sizes to the MIO.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectAddMioSize {
  name: "add_mio_size";
  args: {
    amount?: number;
  };
}

/**
 * add_mio_size_up_requirement_factor
 * @description Changes the base multiplier to the requirement to size up a MIO.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectAddMioSizeUpRequirementFactor {
  name: "add_mio_size_up_requirement_factor";
  args: {
    amount?: number;
  };
}

/**
 * set_mio_size_up_requirement_factor
 * @description Changes the base multiplier to the requirement to size up a MIO.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectSetMioSizeUpRequirementFactor {
  name: "set_mio_size_up_requirement_factor";
  args: {
    amount?: number;
  };
}

/**
 * add_mio_task_capacity
 * @description Changes the base maximum task capacity of the MIO.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectAddMioTaskCapacity {
  name: "add_mio_task_capacity";
  args: {
    amount?: number;
  };
}

/**
 * set_mio_task_capacity
 * @description Changes the base maximum task capacity of the MIO.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectSetMioTaskCapacity {
  name: "set_mio_task_capacity";
  args: {
    amount?: number;
  };
}

/**
 * add_mio_research_bonus
 * @description Changes the base research bonus of the MIO.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectAddMioResearchBonus {
  name: "add_mio_research_bonus";
  args: {
    amount?: number;
  };
}

/**
 * set_mio_research_bonus
 * @description Changes the base research bonus of the MIO.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectSetMioResearchBonus {
  name: "set_mio_research_bonus";
  args: {
    amount?: number;
  };
}

/**
 * set_mio_name_key
 * @description Changes the name of the MIO.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectSetMioNameKey {
  name: "set_mio_name_key";
  args: {
    key?: string;
  };
}

/**
 * set_mio_icon
 * @description Changes the MIO's icon.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectSetMioIcon {
  name: "set_mio_icon";
  args: {
    icon?: string;
  };
}

/**
 * add_mio_design_team_assign_cost
 * @description Changes the base political power cost of the MIO to assign research.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectAddMioDesignTeamAssignCost {
  name: "add_mio_design_team_assign_cost";
  args: {
    amount?: number;
  };
}

/**
 * set_mio_design_team_assign_cost
 * @description Changes the base political power cost of the MIO to assign research.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectSetMioDesignTeamAssignCost {
  name: "set_mio_design_team_assign_cost";
  args: {
    amount?: number;
  };
}

/**
 * add_mio_industrial_manufacturer_assign_cost
 * @description Changes the base political power cost of the MIO to assign production lines.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectAddMioIndustrialManufacturerAssignCost {
  name: "add_mio_industrial_manufacturer_assign_cost";
  args: {
    amount?: number;
  };
}

/**
 * set_mio_industrial_manufacturer_assign_cost
 * @description Changes the base political power cost of the MIO to assign production lines.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectSetMioIndustrialManufacturerAssignCost {
  name: "set_mio_industrial_manufacturer_assign_cost";
  args: {
    amount?: number;
  };
}

/**
 * add_mio_design_team_change_cost
 * @description Changes the base experience cost of the MIO to assign to equipment by a percentage.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectAddMioDesignTeamChangeCost {
  name: "add_mio_design_team_change_cost";
  args: {
    amount?: number;
  };
}

/**
 * set_mio_design_team_change_cost
 * @description Changes the base experience cost of the MIO to assign to equipment by a percentage.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectSetMioDesignTeamChangeCost {
  name: "set_mio_design_team_change_cost";
  args: {
    amount?: number;
  };
}

/**
 * unlock_mio_trait_tooltip
 * @description Displays a tooltip that says that the trait is made available.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectUnlockMioTraitTooltip {
  name: "unlock_mio_trait_tooltip";
  args: {
    trait?: string;
    show_modifiers?: boolean;
  };
}

/**
 * complete_mio_trait
 * @description Completes the specified MIO trait.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectCompleteMioTrait {
  name: "complete_mio_trait";
  args: {
    trait?: string;
    show_modifiers?: boolean;
  };
}

/**
 * set_mio_flag
 * @description Defines a MIO flag.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectSetMioFlag {
  name: "set_mio_flag";
  args: {
    flag?: string;
    days?: number;
    value?: number;
  };
}

/**
 * clr_mio_flag
 * @description Clears a defined MIO flag.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectClrMioFlag {
  name: "clr_mio_flag";
  args: {
    flag?: string;
  };
}

/**
 * modify_mio_flag
 * @description Adds an integer value to a flag.
 * @since 1.13
 * @scope {mio}
 */
export interface EffectModifyMioFlag {
  name: "modify_mio_flag";
  args: {
    flag?: string;
    value?: number;
    days?: number;
  };
}

/**
 * cancel_purchase_contract
 * @description Cancels the current purchase contract.
 * @since 1.13
 * @scope {contract}
 */
export interface EffectCancelPurchaseContract {
  name: "cancel_purchase_contract";
  args: {
    value?: boolean;
  };
}

/**
 * add_raid_history_entry
 * @description Add history entry to a raid.
 * @since 1.15
 * @scope {raid}
 */
export interface EffectAddRaidHistoryEntry {
  name: "add_raid_history_entry";
  args: {
    value?: boolean;
  };
}

/**
 * raid_add_unit_experience
 * @description Will give experience to any type of unit assigned to the raid.
 * @since 1.15
 * @scope {raid}
 */
export interface EffectRaidAddUnitExperience {
  name: "raid_add_unit_experience";
  args: {
    amount?: number;
  };
}

/**
 * raid_damage_units
 * @description Damage is applied to ground units while damage to plane is defined as the amount of planes lost.
 * @since 1.15
 * @scope {raid}
 */
export interface EffectRaidDamageUnits {
  name: "raid_damage_units";
  args: {
    damage?: number;
    org_damage?: number;
    str_damage?: number;
    plane_loss?: number;
    ratio?: boolean;
  };
}

/**
 * add_project_progress_ratio
 * @description Add progress to the project's prototype phase.
 * @since 1.15
 * @scope {special_project}
 */
export interface EffectAddProjectProgressRatio {
  name: "add_project_progress_ratio";
  args: {
    ratio?: number;
  };
}

/**
 * complete_prototype_reward_option
 * @description Complete a prototype reward option for the project in scope.
 * @since 1.15
 * @scope {special_project}
 */
export interface EffectCompletePrototypeRewardOption {
  name: "complete_prototype_reward_option";
  args: {
    prototype_reward?: string;
    prototype_reward_option?: string;
    show_modifiers?: boolean;
  };
}

/**
 * set_project_flag
 * @description Defines a project flag.
 * @since 1.15
 * @scope {special_project}
 */
export interface EffectSetProjectFlag {
  name: "set_project_flag";
  args: {
    flag?: string;
    days?: number;
    value?: number;
  };
}

/**
 * clr_project_flag
 * @description Clears a defined project flag.
 * @since 1.15
 * @scope {special_project}
 */
export interface EffectClrProjectFlag {
  name: "clr_project_flag";
  args: {
    flag?: string;
  };
}

/**
 * modify_project_flag
 * @description Adds an integer value to a flag.
 * @since 1.15
 * @scope {special_project}
 */
export interface EffectModifyProjectFlag {
  name: "modify_project_flag";
  args: {
    flag?: string;
    value?: number;
    days?: number;
  };
}

/**
 * execute_operation_coordinated_strike
 * @description All prepared Port Strike and Strategic Bombing in the target region will execute multiple times.
 * @since 1.9
 * @scope {operation}
 */
export interface EffectExecuteOperationCoordinatedStrike {
  name: "execute_operation_coordinated_strike";
  args: {
    amount?: number;
  };
}

/**
 * all_country
 * @description Checks if all countries meet the triggers.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerAllCountry {
  name: "all_country";
  args?: {};
}

/**
 * any_country
 * @description Checks if any country meets the triggers.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerAnyCountry {
  name: "any_country";
  args?: {};
}

/**
 * all_other_country
 * @description Checks if all countries other than the one where this scope is located meet the triggers.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAllOtherCountry {
  name: "all_other_country";
  args?: {};
}

/**
 * any_other_country
 * @description Checks if any country other than the one where this scope is located meets the triggers.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAnyOtherCountry {
  name: "any_other_country";
  args?: {};
}

/**
 * all_country_with_original_tag
 * @description Checks if all countries originating from the specified country, including the dynamic countries created for civil wars and other purposes, meet the triggers.
 * @since 1.9
 * @scope {any}
 */
export interface TriggerAllCountryWithOriginalTag {
  name: "all_country_with_original_tag";
  args: {
    original_tag_to_check?: string;
  };
}

/**
 * any_country_with_original_tag
 * @description Checks if any country originating from the specified country, including the dynamic countries created for civil wars and other purposes, meet the triggers.
 * @since 1.9
 * @scope {any}
 */
export interface TriggerAnyCountryWithOriginalTag {
  name: "any_country_with_original_tag";
  args: {
    original_tag_to_check?: string;
  };
}

/**
 * all_neighbor_country
 * @description Checks if all countries that border the one where this scope is located meet the triggers.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAllNeighborCountry {
  name: "all_neighbor_country";
  args?: {};
}

/**
 * any_neighbor_country
 * @description Checks if any country that borders the one where this scope is located meets the triggers.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAnyNeighborCountry {
  name: "any_neighbor_country";
  args?: {};
}

/**
 * any_home_area_neighbor_country
 * @description Checks if any country that borders the one where this scope is located, as well as being in its home area - meaning a direct land connection between the capitals of countries - meets the triggers.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAnyHomeAreaNeighborCountry {
  name: "any_home_area_neighbor_country";
  args?: {};
}

/**
 * all_guaranteed_country
 * @description Checks if all countries that are guaranteed by the one where this scope is located meet the triggers.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerAllGuaranteedCountry {
  name: "all_guaranteed_country";
  args?: {};
}

/**
 * any_guaranteed_country
 * @description Checks if any country that is guaranteed by the one where this scope is located meets the triggers.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerAnyGuaranteedCountry {
  name: "any_guaranteed_country";
  args?: {};
}

/**
 * all_allied_country
 * @description Checks if all countries that are allied with the one where this scope is located meet the triggers. Does not include the country itself.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerAllAlliedCountry {
  name: "all_allied_country";
  args?: {};
}

/**
 * any_allied_country
 * @description Checks if any country that is allied with the one where this scope is located meet the triggers. Does not include the country itself.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerAnyAlliedCountry {
  name: "any_allied_country";
  args?: {};
}

/**
 * all_occupied_country
 * @description Checks if all countries that are occupied by the one where this scope is located meet the triggers.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerAllOccupiedCountry {
  name: "all_occupied_country";
  args?: {};
}

/**
 * any_occupied_country
 * @description Checks if any country that is occupied by the one where this scope is located meet the triggers.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerAnyOccupiedCountry {
  name: "any_occupied_country";
  args?: {};
}

/**
 * all_enemy_country
 * @description Checks if all countries that are at war with the one where this scope is located meet the triggers.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerAllEnemyCountry {
  name: "all_enemy_country";
  args?: {};
}

/**
 * any_enemy_country
 * @description Checks if any country that are at war with the one where this scope is located meets the triggers.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerAnyEnemyCountry {
  name: "any_enemy_country";
  args?: {};
}

/**
 * all_subject_countries
 * @description Checks if all countries that are a subject of the one where this scope is located meet the triggers.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerAllSubjectCountries {
  name: "all_subject_countries";
  args?: {};
}

/**
 * any_subject_country
 * @description Checks if any country that is a subject of the one where this scope is located meets the triggers.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerAnySubjectCountry {
  name: "any_subject_country";
  args?: {};
}

/**
 * any_country_with_core
 * @description Checks if any country that has the current scope as a core state meets the triggers.
 * @since 1.12
 * @scope {state}
 */
export interface TriggerAnyCountryWithCore {
  name: "any_country_with_core";
  args?: {};
}

/**
 * all_state
 * @description Check if all states meet the triggers.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerAllState {
  name: "all_state";
  args?: {};
}

/**
 * any_state
 * @description Check if any state meets the triggers.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerAnyState {
  name: "any_state";
  args?: {};
}

/**
 * any_state_in
 * @description Check if any state in the given category meets the trigger.
 * @since 1.15
 * @scope {any}
 */
export interface TriggerAnyStateIn {
  name: "any_state_in";
  args: {
    array?: string;
    continent?: string;
    ai_area?: string;
    strategic_region?: number;
  };
}

/**
 * all_neighbor_state
 * @description Check if all states that are neighbour to the one where this scope is located meet the triggers.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerAllNeighborState {
  name: "all_neighbor_state";
  args?: {};
}

/**
 * any_neighbor_state
 * @description Check if any state that is neighbour to the one where this scope is located meets the triggers.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerAnyNeighborState {
  name: "any_neighbor_state";
  args?: {};
}

/**
 * all_owned_state
 * @description Check if all states that are owned by the country where this scope is located meet the triggers.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAllOwnedState {
  name: "all_owned_state";
  args?: {};
}

/**
 * any_owned_state
 * @description Check if any state that is owned by the country where this scope is located meets the triggers.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAnyOwnedState {
  name: "any_owned_state";
  args?: {};
}

/**
 * all_core_state
 * @description Check if all states that are cored by the country where this scope is located meet the triggers.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerAllCoreState {
  name: "all_core_state";
  args?: {};
}

/**
 * any_core_state
 * @description Check if any state that is cored by the country where this scope is located meets the triggers.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerAnyCoreState {
  name: "any_core_state";
  args?: {};
}

/**
 * all_controlled_state
 * @description Check if all states that are controlled by the country where this scope is located meet the triggers.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerAllControlledState {
  name: "all_controlled_state";
  args?: {};
}

/**
 * any_controlled_state
 * @description Check if any state that is controlled by the country where this scope is located meets the triggers.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerAnyControlledState {
  name: "any_controlled_state";
  args?: {};
}

/**
 * all_unit_leader
 * @description Checks if all unit leaders (corps commanders, field marshals, admirals) that are employed by the country where this scope is located meet the triggers.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerAllUnitLeader {
  name: "all_unit_leader";
  args?: {};
}

/**
 * any_unit_leader
 * @description Checks if any unit leader (corps commander, field marshal, admiral) that is employed by the country where this scope is located meets the triggers.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerAnyUnitLeader {
  name: "any_unit_leader";
  args?: {};
}

/**
 * all_army_leader
 * @description Checks if all army leaders that are employed by the country where this scope is located meet the triggers.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerAllArmyLeader {
  name: "all_army_leader";
  args?: {};
}

/**
 * any_army_leader
 * @description Checks if any army leader that is employed by the country where this scope is located meets the triggers.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerAnyArmyLeader {
  name: "any_army_leader";
  args?: {};
}

/**
 * all_navy_leader
 * @description Checks if all navy leaders that are employed by the country where this scope is located meet the triggers.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerAllNavyLeader {
  name: "all_navy_leader";
  args?: {};
}

/**
 * any_navy_leader
 * @description Checks if any navy leader that is employed by the country where this scope is located meets the triggers.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerAnyNavyLeader {
  name: "any_navy_leader";
  args?: {};
}

/**
 * all_operative_leader
 * @description Checks if all operatives that are employed by the country where this scope is located meet the triggers.
 * @since 1.9
 * @scope {country | operation}
 */
export interface TriggerAllOperativeLeader {
  name: "all_operative_leader";
  args?: {};
}

/**
 * any_operative_leader
 * @description Checks if any operative that is employed by the country where this scope is located meets the triggers.
 * @since 1.9
 * @scope {country | operation}
 */
export interface TriggerAnyOperativeLeader {
  name: "any_operative_leader";
  args?: {};
}

/**
 * all_character
 * @description Checks if all characters that are recruited by the country where this scope is located meet the triggers.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerAllCharacter {
  name: "all_character";
  args?: {};
}

/**
 * any_character
 * @description Checks if any character that is recruited by the country where this scope is located meets the triggers.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerAnyCharacter {
  name: "any_character";
  args?: {};
}

/**
 * any_country_division
 * @description Checks if any division owned by the current country meets the triggers.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerAnyCountryDivision {
  name: "any_country_division";
  args?: {};
}

/**
 * any_state_division
 * @description Checks if any division within the current state meets the triggers.
 * @since 1.12
 * @scope {state}
 */
export interface TriggerAnyStateDivision {
  name: "any_state_division";
  args?: {};
}

/**
 * all_military_industrial_organization
 * @description Checks if all MIOs within the current country meet the conditions.
 * @since 1.13
 * @scope {country}
 */
export interface TriggerAllMilitaryIndustrialOrganization {
  name: "all_military_industrial_organization";
  args?: {};
}

/**
 * any_military_industrial_organization
 * @description Checks if any MIO within the current country meets the conditions.
 * @since 1.13
 * @scope {country}
 */
export interface TriggerAnyMilitaryIndustrialOrganization {
  name: "any_military_industrial_organization";
  args?: {};
}

/**
 * all_purchase_contract
 * @description Checks if all purchase contracts within the current country meet the conditions.
 * @since 1.13
 * @scope {country}
 */
export interface TriggerAllPurchaseContract {
  name: "all_purchase_contract";
  args?: {};
}

/**
 * any_purchase_contract
 * @description Checks if any purchase contract within the current country meet the conditions.
 * @since 1.13
 * @scope {country}
 */
export interface TriggerAnyPurchaseContract {
  name: "any_purchase_contract";
  args?: {};
}

/**
 * all_scientists
 * @description Checks if all scientists of the Country in scope matches the triggers.
 * @since 1.15
 * @scope {country}
 */
export interface TriggerAllScientists {
  name: "all_scientists";
  args?: {};
}

/**
 * any_scientist
 * @description Checks if at least one active scientist of the Country in scope matches the triggers.
 * @since 1.15
 * @scope {country}
 */
export interface TriggerAnyScientist {
  name: "any_scientist";
  args?: {};
}

/**
 * all_active_scientist
 * @description Checks if all active scientists of the Country in scope matches the triggers.
 * @since 1.15
 * @scope {country}
 */
export interface TriggerAllActiveScientist {
  name: "all_active_scientist";
  args?: {};
}

/**
 * any_active_scientist
 * @description Checks if at least one active scientist of the Country in scope matches the triggers.
 * @since 1.15
 * @scope {country}
 */
export interface TriggerAnyActiveScientist {
  name: "any_active_scientist";
  args?: {};
}

/**
 * AND
 * @description Returns false if any sub-trigger returns false, true otherwise. Evaluation stops at the first false sub-trigger.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerAND {
  name: "AND";
  args?: {};
}

/**
 * OR
 * @description Returns true if any sub-trigger returns true, false otherwise. Evaluation stops at the first true sub-trigger.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerOR {
  name: "OR";
  args?: {};
}

/**
 * NOT
 * @description Returns false if any sub-trigger returns true, true otherwise. Evaluation stops at the first true sub-trigger.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerNOT {
  name: "NOT";
  args?: {};
}

/**
 * count_triggers
 * @description Sums the results of all sub-triggers (false=0, true=1) and returns true if the sum is at least amount.
 * @since 1.5
 * @scope {any}
 */
export interface TriggerCountTriggers {
  name: "count_triggers";
  args: {
    amount?: number;
  };
}

/**
 * if
 * @description If limit is true, the sub-triggers are evaluated like an AND-trigger. If limit is false, else_if blocks are tried in sequence and finally else (if present). Otherwise true is returned.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerIf {
  name: "if";
  args: {
    limit?: string;
    else_if?: string;
    else?: string;
  };
}

/**
 * hidden_trigger
 * @description Hides the triggers from the tooltip shown to the player.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerHiddenTrigger {
  name: "hidden_trigger";
  args?: {};
}

/**
 * custom_trigger_tooltip
 * @description Hides the triggers from the tooltip shown to the player and instead uses the specified localisation key.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerCustomTriggerTooltip {
  name: "custom_trigger_tooltip";
  args: {
    tooltip?: string;
  };
}

/**
 * custom_override_tooltip
 * @description An AND trigger that has an overriden custom tooltip.
 * @since 1.15
 * @scope {any}
 */
export interface TriggerCustomOverrideTooltip {
  name: "custom_override_tooltip";
  args: {
    tooltip?: string;
    not_tooltip?: string;
  };
}

/**
 * always
 * @description Always returns true or false. Useful for debugging.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerAlways {
  name: "always";
  args: {
    value?: boolean;
  };
}

/**
 * has_global_flag
 * @description Checks if the specified flag has been set. Can also compare the flag's last set date, days since last set, and/or value.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerHasGlobalFlag {
  name: "has_global_flag";
  args: {
    flag?: string;
    value?: number;
    date?: string;
    days?: number;
  };
}

/**
 * has_dlc
 * @description Checks if the specified DLC is enabled.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerHasDlc {
  name: "has_dlc";
  args: {
    dlc_name?: string;
  };
}

/**
 * has_start_date
 * @description Checks if the specified date was the start date used for the current game.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerHasStartDate {
  name: "has_start_date";
  args: {
    date?: string;
  };
}

/**
 * date
 * @description Checks if the specified date against the current date.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerDate {
  name: "date";
  args: {
    date?: string;
  };
}

/**
 * difficulty
 * @description checks if the specified difficulty against the current difficulty.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerDifficulty {
  name: "difficulty";
  args: {
    value?: number;
  };
}

/**
 * has_any_custom_difficulty_setting
 * @description Checks if any custom difficulty setting is changed from their default value.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerHasAnyCustomDifficultySetting {
  name: "has_any_custom_difficulty_setting";
  args: {
    value?: boolean;
  };
}

/**
 * has_custom_difficulty_setting
 * @description Checks if the specified custom difficulty setting is changed from the default value.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerHasCustomDifficultySetting {
  name: "has_custom_difficulty_setting";
  args: {
    setting?: string;
  };
}

/**
 * game_rules_allow_achievements
 * @description Checks if all of the active game rule options allow achievements.
 * @since 1.9
 * @scope {any}
 */
export interface TriggerGameRulesAllowAchievements {
  name: "game_rules_allow_achievements";
  args: {
    value?: boolean;
  };
}

/**
 * country_exists
 * @description Checks if the specified country currently exists in game.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerCountryExists {
  name: "country_exists";
  args: {
    country?: string;
  };
}

/**
 * is_ironman
 * @description Checks if the current game is running in Ironman mode.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerIsIronman {
  name: "is_ironman";
  args: {
    value?: boolean;
  };
}

/**
 * is_historical_focus_on
 * @description Checks if the current game is running with Historical Focuses on.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerIsHistoricalFocusOn {
  name: "is_historical_focus_on";
  args: {
    value?: boolean;
  };
}

/**
 * is_tutorial
 * @description Checks if the current game is running in Tutorial mode.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerIsTutorial {
  name: "is_tutorial";
  args: {
    value?: boolean;
  };
}

/**
 * is_debug
 * @description Checks if game is in debug mode (launched with -debug argument).
 * @since 1.9
 * @scope {any}
 */
export interface TriggerIsDebug {
  name: "is_debug";
  args: {
    value?: boolean;
  };
}

/**
 * threat
 * @description Checks if World Tension is above the specified amount.
 * @since 1.0
 * @scope {any}
 */
export interface TriggerThreat {
  name: "threat";
  args: {
    value?: number;
  };
}

/**
 * has_game_rule
 * @description Checks if a game rule is set to a particular option.
 * @since 1.5
 * @scope {any}
 */
export interface TriggerHasGameRule {
  name: "has_game_rule";
  args: {
    rule?: string;
    option?: string;
  };
}

/**
 * has_completed_custom_achievement
 * @description Checks if the player controlling the current scope has completed the specified custom achievement.
 * @since 1.12.5
 * @scope {any}
 */
export interface TriggerHasCompletedCustomAchievement {
  name: "has_completed_custom_achievement";
  args: {
    mod?: string;
    achievement?: string;
  };
}

/**
 * has_variable
 * @description Checks if the specified variable exists for the current scope.
 * @since 1.5
 * @scope {any}
 */
export interface TriggerHasVariable {
  name: "has_variable";
  args: {
    variable?: string;
  };
}

/**
 * check_variable
 * @description Check the specified variable for the current scope.
 * @since 1.5
 * @scope {any}
 */
export interface TriggerCheckVariable {
  name: "check_variable";
  args: {
    var?: string;
    value?: string;
    compare?: string;
  };
}

/**
 * log
 * @description Appends an entry into the game.log and, if open, the console when evaluating the trigger.
 * @since 1.5
 * @scope {any}
 */
export interface TriggerLog {
  name: "log";
  args: {
    message?: string;
  };
}

/**
 * print_variables
 * @description Dumps the specified variables from the current scope and optionally the global scope into a log file with the specified name.
 * @since 1.5
 * @scope {any}
 */
export interface TriggerPrintVariables {
  name: "print_variables";
  args: {
    print_global?: boolean;
    var_list?: string;
    file?: string;
    text?: string;
    append?: boolean;
  };
}

/**
 * exists
 * @description Checks if the current scope exists in game.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerExists {
  name: "exists";
  args: {
    value?: boolean;
  };
}

/**
 * tag
 * @description Checks if the current scope is the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerTag {
  name: "tag";
  args: {
    country?: string;
  };
}

/**
 * original_tag
 * @description Checks if the current scope originates from the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerOriginalTag {
  name: "original_tag";
  args: {
    country?: string;
  };
}

/**
 * is_ai
 * @description Checks if the current scope is AI.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsAi {
  name: "is_ai";
  args: {
    value?: boolean;
  };
}

/**
 * has_collaboration
 * @description Checks if the current scope has a collaboration level in the target scope.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerHasCollaboration {
  name: "has_collaboration";
  args: {
    target?: string;
    value?: string;
  };
}

/**
 * has_country_flag
 * @description Checks if the current scope has the specified flag. Can also compare the flag's last set date, days since last set, and/or value.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasCountryFlag {
  name: "has_country_flag";
  args: {
    flag?: string;
    value?: number;
    date?: string;
    days?: number;
  };
}

/**
 * has_cosmetic_tag
 * @description Checks if the current scope has the specified cosmetic tag active.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerHasCosmeticTag {
  name: "has_cosmetic_tag";
  args: {
    tag?: string;
  };
}

/**
 * has_event_target
 * @description Checks if current scope or global scope has the specified event target saved.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasEventTarget {
  name: "has_event_target";
  args: {
    target?: string;
  };
}

/**
 * has_decision
 * @description Checks if the current scope has the specified decision activated.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerHasDecision {
  name: "has_decision";
  args: {
    decision?: string;
  };
}

/**
 * has_dynamic_modifier
 * @description Checks if the current scope has the specified dynamic modifier activated.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerHasDynamicModifier {
  name: "has_dynamic_modifier";
  args: {
    modifier?: string;
    scope?: string;
  };
}

/**
 * has_active_mission
 * @description Checks if the current scope has the specified mission active.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerHasActiveMission {
  name: "has_active_mission";
  args: {
    mission?: string;
  };
}

/**
 * has_country_custom_difficulty_setting
 * @description Checks if the any custom difficulty setting targeting the current scope is changed from the default value.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasCountryCustomDifficultySetting {
  name: "has_country_custom_difficulty_setting";
  args: {
    value?: boolean;
  };
}

/**
 * has_terrain
 * @description Checks if the current scope has any provinces of the specified terrain.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerHasTerrain {
  name: "has_terrain";
  args: {
    terrain?: string;
  };
}

/**
 * is_dynamic_country
 * @description Checks if the current scope is a dynamic country.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerIsDynamicCountry {
  name: "is_dynamic_country";
  args: {
    value?: boolean;
  };
}

/**
 * num_of_supply_nodes
 * @description Checks if the current scope has the specified amount of supply nodes under control.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerNumOfSupplyNodes {
  name: "num_of_supply_nodes";
  args: {
    value?: number;
  };
}

/**
 * has_resources_in_country
 * @description Checks if the current scope has the specified amount of the specified resource in reserve.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerHasResourcesInCountry {
  name: "has_resources_in_country";
  args: {
    resource?: string;
    amount?: number;
    extracted?: boolean;
    buildings?: boolean;
  };
}

/**
 * has_focus_tree
 * @description Checks if the current scope has the specified focus tree.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerHasFocusTree {
  name: "has_focus_tree";
  args: {
    tree?: string;
  };
}

/**
 * has_completed_focus
 * @description Checks if the current scope has the specified focus completed.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasCompletedFocus {
  name: "has_completed_focus";
  args: {
    focus?: string;
  };
}

/**
 * focus_progress
 * @description Checks if the specified focus has been completed the specified percent for the current scope.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerFocusProgress {
  name: "focus_progress";
  args: {
    focus?: string;
    progress?: number;
  };
}

/**
 * has_shine_effect_on_focus
 * @description Check if country has shine effect on focus (either manually achieved or by being worked on).
 * @since 1.15
 * @scope {country}
 */
export interface TriggerHasShineEffectOnFocus {
  name: "has_shine_effect_on_focus";
  args: {
    focus?: string;
  };
}

/**
 * ideology
 * @description Checks if the current scope has popularity of the specified ideology above the specified amount. Name is the ideology, e.g. 'fascism'.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIdeology {
  name: "ideology";
  args: {
    ideology_name?: string;
  };
}

/**
 * has_political_power
 * @description Checks if the current scope has the specified amount of political power.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasPoliticalPower {
  name: "has_political_power";
  args: {
    value?: number;
  };
}

/**
 * political_power_daily
 * @description Checks if the current scope has the specified amount of daily political power gain.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerPoliticalPowerDaily {
  name: "political_power_daily";
  args: {
    value?: string;
  };
}

/**
 * political_power_growth
 * @description Checks if the current scope has the specified amount of daily political power gain.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerPoliticalPowerGrowth {
  name: "political_power_growth";
  args: {
    value?: string;
  };
}

/**
 * command_power
 * @description Checks if the current scope has the specified amount of command power.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerCommandPower {
  name: "command_power";
  args: {
    value?: string;
  };
}

/**
 * command_power_daily
 * @description Checks if the current scope has the specified amount of daily command power gain.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerCommandPowerDaily {
  name: "command_power_daily";
  args: {
    value?: string;
  };
}

/**
 * has_war_support
 * @description Checks if the current scope has the specified percentage of War Support.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerHasWarSupport {
  name: "has_war_support";
  args: {
    value?: string;
  };
}

/**
 * has_stability
 * @description Checks if the current scope has the specified percentage of Stability.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerHasStability {
  name: "has_stability";
  args: {
    value?: string;
  };
}

/**
 * has_government
 * @description Checks if the ruling party of the current scope meets the requirements of being either the specified ideology group or having the same ideology group as the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasGovernment {
  name: "has_government";
  args: {
    ideology_or_country?: string;
  };
}

/**
 * has_elections
 * @description Checks if the current scope holds elections.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasElections {
  name: "has_elections";
  args: {
    value?: boolean;
  };
}

/**
 * is_staging_coup
 * @description Checks if the current scope is staging a coup.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerIsStagingCoup {
  name: "is_staging_coup";
  args: {
    value?: boolean;
  };
}

/**
 * is_target_of_coup
 * @description Checks if the current scope is the target of a coup.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsTargetOfCoup {
  name: "is_target_of_coup";
  args: {
    value?: boolean;
  };
}

/**
 * has_civil_war
 * @description Checks if the current scope has a civil war active.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasCivilWar {
  name: "has_civil_war";
  args: {
    value?: boolean;
  };
}

/**
 * civilwar_target
 * @description Checks if the specified country is a target of a civil war.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerCivilwarTarget {
  name: "civilwar_target";
  args: {
    target?: string;
  };
}

/**
 * has_manpower_for_recruit_change_to
 * @description Checks if the current scope has the specified amount of manpower for changing the specified idea group.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasManpowerForRecruitChangeTo {
  name: "has_manpower_for_recruit_change_to";
  args: {
    value?: number;
    group?: string;
  };
}

/**
 * has_rule
 * @description Checks if the current scope has the specified country rule.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerHasRule {
  name: "has_rule";
  args: {
    rule?: string;
  };
}

/**
 * has_casualties_war_support
 * @description Checks if the current scope has the specified percentage of war support from own combat casualties.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerHasCasualtiesWarSupport {
  name: "has_casualties_war_support";
  args: {
    value?: string;
  };
}

/**
 * has_convoys_war_support
 * @description Checks if the current scope has the specified percentage of war support from own convoys sunk.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerHasConvoysWarSupport {
  name: "has_convoys_war_support";
  args: {
    value?: string;
  };
}

/**
 * has_bombing_war_support
 * @description Checks if the current scope has the specified percentage of war support from own states bombed by the enemy.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerHasBombingWarSupport {
  name: "has_bombing_war_support";
  args: {
    value?: string;
  };
}

/**
 * has_power_balance
 * @description Checks if the current scope has the specified balance of power active.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerHasPowerBalance {
  name: "has_power_balance";
  args: {
    id?: string;
  };
}

/**
 * has_any_power_balance
 * @description Checks if the current scope has any balance of power active.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerHasAnyPowerBalance {
  name: "has_any_power_balance";
  args: {
    value?: boolean;
  };
}

/**
 * power_balance_value
 * @description Checks if the current scope has the specified value within the balance of power.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPowerBalanceValue {
  name: "power_balance_value";
  args: {
    id?: string;
    value?: number;
  };
}

/**
 * power_balance_daily_change
 * @description Checks if the current scope's balance of power changes each day by the specified value.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPowerBalanceDailyChange {
  name: "power_balance_daily_change";
  args: {
    id?: string;
    value?: number;
  };
}

/**
 * power_balance_weekly_change
 * @description Checks if the current scope's balance of power changes each week by the specified value.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPowerBalanceWeeklyChange {
  name: "power_balance_weekly_change";
  args: {
    id?: string;
    value?: number;
  };
}

/**
 * is_power_balance_in_range
 * @description Checks if the current scope's balance of power value lies within the specified range.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerIsPowerBalanceInRange {
  name: "is_power_balance_in_range";
  args: {
    id?: string;
    range?: string;
  };
}

/**
 * is_power_balance_side_active
 * @description Checks if the specified balance of power has a side active.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerIsPowerBalanceSideActive {
  name: "is_power_balance_side_active";
  args: {
    id?: string;
    side?: string;
  };
}

/**
 * has_power_balance_modifier
 * @description Checks if the current scope's balance of power value activates a modifier.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerHasPowerBalanceModifier {
  name: "has_power_balance_modifier";
  args: {
    id?: string;
    modifier?: string;
  };
}

/**
 * building_count_trigger
 * @description Checks if the current scope has the specified amount of the specified building. Name is the building, e.g. 'arms_factory'.
 * @since 1.0
 * @scope {country | state}
 */
export interface TriggerBuildingCountTrigger {
  name: "building_count_trigger";
  args: {
    building_name?: number;
  };
}

/**
 * num_of_military_factories
 * @description Checks if the current scope has the specified amount of military factories.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNumOfMilitaryFactories {
  name: "num_of_military_factories";
  args: {
    value?: number;
  };
}

/**
 * num_of_civilian_factories
 * @description Checks if the current scope has the specified amount of civilian factories.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNumOfCivilianFactories {
  name: "num_of_civilian_factories";
  args: {
    value?: number;
  };
}

/**
 * num_of_naval_factories
 * @description Checks if the current scope has the specified amount of dockyards.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNumOfNavalFactories {
  name: "num_of_naval_factories";
  args: {
    value?: number;
  };
}

/**
 * num_of_available_military_factories
 * @description Checks if the current scope has the specified amount of available military factories.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNumOfAvailableMilitaryFactories {
  name: "num_of_available_military_factories";
  args: {
    value?: number;
  };
}

/**
 * num_of_available_civilian_factories
 * @description Checks if the current scope has the specified amount of available civilian factories.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNumOfAvailableCivilianFactories {
  name: "num_of_available_civilian_factories";
  args: {
    value?: number;
  };
}

/**
 * num_of_available_naval_factories
 * @description Checks if the current scope has the specified amount of available dockyards.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNumOfAvailableNavalFactories {
  name: "num_of_available_naval_factories";
  args: {
    value?: number;
  };
}

/**
 * num_of_factories
 * @description Checks if the current scope has the specified amount of military, civilian or dockyard factories.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNumOfFactories {
  name: "num_of_factories";
  args: {
    value?: number;
  };
}

/**
 * num_of_controlled_factories
 * @description Checks if the current scope has the specified amount of military, civilian or dockyard factories under control.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerNumOfControlledFactories {
  name: "num_of_controlled_factories";
  args: {
    value?: number;
  };
}

/**
 * num_of_owned_factories
 * @description Checks if the current scope has the specified amount of military, civilian or dockyard factories under owned states.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerNumOfOwnedFactories {
  name: "num_of_owned_factories";
  args: {
    value?: number;
  };
}

/**
 * num_of_civilian_factories_available_for_projects
 * @description Checks if the current scope has the specified amount of civilian factories usable for projects.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerNumOfCivilianFactoriesAvailableForProjects {
  name: "num_of_civilian_factories_available_for_projects";
  args: {
    value?: number;
  };
}

/**
 * ic_ratio
 * @description Checks if the current scope has the specified ratio of factories with the target country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIcRatio {
  name: "ic_ratio";
  args: {
    tag?: string;
    ratio?: number;
  };
}

/**
 * has_damaged_buildings
 * @description Checks if the current scope has any damanged buildings in their states.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasDamagedBuildings {
  name: "has_damaged_buildings";
  args: {
    value?: boolean;
  };
}

/**
 * has_built
 * @description Checks if the current scope has built the specified building the specified number of times.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasBuilt {
  name: "has_built";
  args: {
    type?: string;
    value?: number;
  };
}

/**
 * has_tech
 * @description Checks if the current scope has the specified technology.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasTech {
  name: "has_tech";
  args: {
    technology?: string;
  };
}

/**
 * is_researching_technology
 * @description Checks if the current scope is currently researching the specified technology.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsResearchingTechnology {
  name: "is_researching_technology";
  args: {
    technology?: string;
  };
}

/**
 * can_research
 * @description Checks if the current scope can start researching the specified technology.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerCanResearch {
  name: "can_research";
  args: {
    technology?: string;
  };
}

/**
 * original_research_slots
 * @description Checks if the current scope had the specified amount of slots at game start.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerOriginalResearchSlots {
  name: "original_research_slots";
  args: {
    value?: number;
  };
}

/**
 * amount_research_slots
 * @description Checks if the current scope has the specified amount of research slots.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerAmountResearchSlots {
  name: "amount_research_slots";
  args: {
    value?: number;
  };
}

/**
 * is_in_tech_sharing_group
 * @description Checks if the current scope is in the specified technology sharing group.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerIsInTechSharingGroup {
  name: "is_in_tech_sharing_group";
  args: {
    group?: string;
  };
}

/**
 * num_tech_sharing_groups
 * @description Checks if the current scope is in the specified amount of technology sharing groups.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerNumTechSharingGroups {
  name: "num_tech_sharing_groups";
  args: {
    value?: number;
  };
}

/**
 * has_tech_bonus
 * @description Checks if the current scope has a technology bonus in the specified category, or for the specific technology.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerHasTechBonus {
  name: "has_tech_bonus";
  args: {
    technology?: string;
    category?: string;
  };
}

/**
 * land_doctrine_level
 * @description Checks if the current scope has the specified amount of land doctrine technologies.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerLandDoctrineLevel {
  name: "land_doctrine_level";
  args: {
    value?: number;
  };
}

/**
 * num_researched_technologies
 * @description Checks how many technologies the target has researched.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerNumResearchedTechnologies {
  name: "num_researched_technologies";
  args: {
    value?: number;
  };
}

/**
 * is_special_project_completed
 * @description Checks if the current scope has the specified special project completed.
 * @since 1.15
 * @scope {country}
 */
export interface TriggerIsSpecialProjectCompleted {
  name: "is_special_project_completed";
  args: {
    project?: string;
  };
}

/**
 * has_idea
 * @description Checks if the current scope has the specified idea.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasIdea {
  name: "has_idea";
  args: {
    idea?: string;
  };
}

/**
 * has_idea_with_trait
 * @description Checks if the current scope has any ideas with the specified trait.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasIdeaWithTrait {
  name: "has_idea_with_trait";
  args: {
    trait?: string;
  };
}

/**
 * has_allowed_idea_with_traits
 * @description Checks if the current scope has the specified amount of ideas with the specified trait.
 * @since 1.9.1
 * @scope {country}
 */
export interface TriggerHasAllowedIdeaWithTraits {
  name: "has_allowed_idea_with_traits";
  args: {
    idea?: string;
    limit?: number;
    characters?: boolean;
    ignore?: string;
  };
}

/**
 * has_available_idea_with_traits
 * @description Checks if the current scope has the specified amount of ideas with the specified trait.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasAvailableIdeaWithTraits {
  name: "has_available_idea_with_traits";
  args: {
    idea?: string;
    limit?: number;
    characters?: boolean;
    ignore?: string;
  };
}

/**
 * amount_taken_ideas
 * @description Checks if the current scope has the specified amount of ideas of the specified slot type.
 * @since 1.4
 * @scope {country}
 */
export interface TriggerAmountTakenIdeas {
  name: "amount_taken_ideas";
  args: {
    amount?: number;
    slots?: string;
  };
}

/**
 * is_major
 * @description Checks if the current scope is considered a Major.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsMajor {
  name: "is_major";
  args: {
    value?: boolean;
  };
}

/**
 * is_ally_with
 * @description Checks if the current scope is an ally (Faction members or subject-master relation).
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsAllyWith {
  name: "is_ally_with";
  args: {
    country?: string;
  };
}

/**
 * is_in_faction_with
 * @description Checks if the current scope is in a faction with the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsInFactionWith {
  name: "is_in_faction_with";
  args: {
    country?: string;
  };
}

/**
 * is_in_faction
 * @description Checks if the current scope is in a faction.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsInFaction {
  name: "is_in_faction";
  args: {
    value?: boolean;
  };
}

/**
 * is_faction_leader
 * @description Checks if the current scope is the leader of a faction.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsFactionLeader {
  name: "is_faction_leader";
  args: {
    value?: boolean;
  };
}

/**
 * is_spymaster
 * @description Checks if the current scope is the spymaster of a faction.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerIsSpymaster {
  name: "is_spymaster";
  args: {
    value?: boolean;
  };
}

/**
 * num_faction_members
 * @description Checks if the faction of the current scope has the specified amount of members.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNumFactionMembers {
  name: "num_faction_members";
  args: {
    value?: number;
  };
}

/**
 * has_non_aggression_pact_with
 * @description Checks if the current scope has a non-aggression pact with the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasNonAggressionPactWith {
  name: "has_non_aggression_pact_with";
  args: {
    country?: string;
  };
}

/**
 * is_guaranteed_by
 * @description Checks if the current scope has been guaranteed by the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsGuaranteedBy {
  name: "is_guaranteed_by";
  args: {
    country?: string;
  };
}

/**
 * has_guaranteed
 * @description Checks if the current scope has guaranteed the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasGuaranteed {
  name: "has_guaranteed";
  args: {
    country?: string;
  };
}

/**
 * has_military_access_to
 * @description Checks if the current scope has military access to the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasMilitaryAccessTo {
  name: "has_military_access_to";
  args: {
    country?: string;
  };
}

/**
 * gives_military_access_to
 * @description Checks if the current scope gives military to the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerGivesMilitaryAccessTo {
  name: "gives_military_access_to";
  args: {
    country?: string;
  };
}

/**
 * is_neighbor_of
 * @description Checks if the current scope is a neighbor of the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsNeighborOf {
  name: "is_neighbor_of";
  args: {
    country?: string;
  };
}

/**
 * is_owner_neighbor_of
 * @description Checks if the current scope is a neighbor of the specified country with their core territory only.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsOwnerNeighborOf {
  name: "is_owner_neighbor_of";
  args: {
    country?: string;
  };
}

/**
 * is_puppet_of
 * @description Checks if the current scope is a puppet of the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsPuppetOf {
  name: "is_puppet_of";
  args: {
    country?: string;
  };
}

/**
 * is_subject_of
 * @description Checks if the current scope is a subject of the specified scope.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsSubjectOf {
  name: "is_subject_of";
  args: {
    country?: string;
  };
}

/**
 * is_puppet
 * @description Returns true if the current country is a puppet.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsPuppet {
  name: "is_puppet";
  args: {
    value?: boolean;
  };
}

/**
 * is_subject
 * @description Checks if the current scope is a subject.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsSubject {
  name: "is_subject";
  args: {
    value?: boolean;
  };
}

/**
 * has_subject
 * @description Checks if the country has for subject the given country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasSubject {
  name: "has_subject";
  args: {
    country?: string;
  };
}

/**
 * num_subjects
 * @description Checks if the current scope has the specified amount of subjects.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerNumSubjects {
  name: "num_subjects";
  args: {
    value?: number;
  };
}

/**
 * has_autonomy_state
 * @description Checks if the current scope is in the specified autonomous state.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasAutonomyState {
  name: "has_autonomy_state";
  args: {
    state?: string;
  };
}

/**
 * compare_autonomy_state
 * @description Checks if the current scope's autonomy state min_freedom_level is less or greater than that of the specified autonomy state.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerCompareAutonomyState {
  name: "compare_autonomy_state";
  args: {
    state?: string;
  };
}

/**
 * compare_autonomy_progress_ratio
 * @description Checks if the current scope autonomy progress is at the specified ratio.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerCompareAutonomyProgressRatio {
  name: "compare_autonomy_progress_ratio";
  args: {
    ratio?: number;
  };
}

/**
 * has_opinion_modifier
 * @description Checks if the current scope has the specified opinion modifier.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasOpinionModifier {
  name: "has_opinion_modifier";
  args: {
    modifier?: string;
  };
}

/**
 * has_opinion
 * @description Checks if the current scope has the specified opinion with the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasOpinion {
  name: "has_opinion";
  args: {
    target?: string;
    value?: number;
  };
}

/**
 * has_relation_modifier
 * @description Checks if the current scope has the specified relation modifier with the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasRelationModifier {
  name: "has_relation_modifier";
  args: {
    target?: string;
    modifier?: string;
  };
}

/**
 * has_legitimacy
 * @description Checks how much legitimacy the current government in exile has.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerHasLegitimacy {
  name: "has_legitimacy";
  args: {
    value?: number;
  };
}

/**
 * is_exile_host
 * @description Checks if the current country is hosting an exile.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerIsExileHost {
  name: "is_exile_host";
  args: {
    value?: boolean;
  };
}

/**
 * is_hosting_exile
 * @description Checks if the current country is hosting a specific exile.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerIsHostingExile {
  name: "is_hosting_exile";
  args: {
    country?: string;
  };
}

/**
 * is_government_in_exile
 * @description Checks if the current country is exiled in a different country.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerIsGovernmentInExile {
  name: "is_government_in_exile";
  args: {
    value?: boolean;
  };
}

/**
 * is_exiled_in
 * @description Checks if the current country is exiled in a specific country.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerIsExiledIn {
  name: "is_exiled_in";
  args: {
    country?: string;
  };
}

/**
 * received_expeditionary_forces
 * @description Checks if the current country received X units in expeditions from the specified country.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerReceivedExpeditionaryForces {
  name: "received_expeditionary_forces";
  args: {
    sender?: string;
    value?: number;
  };
}

/**
 * can_declare_war_on
 * @description Checks if the current scope is able to declare war on the specified country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerCanDeclareWarOn {
  name: "can_declare_war_on";
  args: {
    country?: string;
  };
}

/**
 * foreign_manpower
 * @description Checks how much foreign manpower we have received for garrisoning.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerForeignManpower {
  name: "foreign_manpower";
  args: {
    value?: number;
  };
}

/**
 * is_embargoed_by
 * @description Checks if the current scope is embargoed by the specified country.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerIsEmbargoedBy {
  name: "is_embargoed_by";
  args: {
    country?: string;
  };
}

/**
 * is_embargoing
 * @description Checks if the current scope is embargoing the specified country.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerIsEmbargoing {
  name: "is_embargoing";
  args: {
    country?: string;
  };
}

/**
 * has_war
 * @description Checks if the current scope is at war.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasWar {
  name: "has_war";
  args: {
    value?: boolean;
  };
}

/**
 * has_war_with
 * @description Checks if the current scope is at war with the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasWarWith {
  name: "has_war_with";
  args: {
    country?: string;
  };
}

/**
 * has_offensive_war_with
 * @description Checks if the current scope is in an offensive war against the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasOffensiveWarWith {
  name: "has_offensive_war_with";
  args: {
    country?: string;
  };
}

/**
 * has_defensive_war_with
 * @description Checks if the current scope is in a defensive war against the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasDefensiveWarWith {
  name: "has_defensive_war_with";
  args: {
    country?: string;
  };
}

/**
 * has_offensive_war
 * @description Checks if the current scope is in an offensive war.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasOffensiveWar {
  name: "has_offensive_war";
  args: {
    value?: boolean;
  };
}

/**
 * has_defensive_war
 * @description Checks if the current scope is in a defensive war.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasDefensiveWar {
  name: "has_defensive_war";
  args: {
    value?: boolean;
  };
}

/**
 * has_war_together_with
 * @description Checks if the current scope is in a war alongside the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasWarTogetherWith {
  name: "has_war_together_with";
  args: {
    country?: string;
  };
}

/**
 * has_war_with_major
 * @description Checks if the current scope is at war with any other country that is considered major.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerHasWarWithMajor {
  name: "has_war_with_major";
  args: {
    value?: boolean;
  };
}

/**
 * has_war_with_wargoal_against
 * @description Checks if the current scope is at war with the specified country with the specified wargoal being active.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerHasWarWithWargoalAgainst {
  name: "has_war_with_wargoal_against";
  args: {
    target?: string;
    type?: string;
  };
}

/**
 * surrender_progress
 * @description Checks if the current scope has the specified amount of surrender progress.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerSurrenderProgress {
  name: "surrender_progress";
  args: {
    value?: string;
  };
}

/**
 * any_war_score
 * @description Checks if the current scope has the specified amount of war progress in any war.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAnyWarScore {
  name: "any_war_score";
  args: {
    value?: number;
  };
}

/**
 * has_capitulated
 * @description Checks if the current scope has capitulated.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasCapitulated {
  name: "has_capitulated";
  args: {
    value?: boolean;
  };
}

/**
 * days_since_capitulated
 * @description Checks the amount of days since the target last capitulated.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerDaysSinceCapitulated {
  name: "days_since_capitulated";
  args: {
    days?: number;
  };
}

/**
 * has_border_war_with
 * @description Checks if the current scope has a border war with the specified country.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerHasBorderWarWith {
  name: "has_border_war_with";
  args: {
    country?: string;
  };
}

/**
 * has_border_war_between
 * @description Checks if there is a border war between the two specified states.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerHasBorderWarBetween {
  name: "has_border_war_between";
  args: {
    attacker?: string;
    defender?: string;
  };
}

/**
 * has_border_war
 * @description Checks if the current scope has a border war active.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerHasBorderWar {
  name: "has_border_war";
  args: {
    value?: boolean;
  };
}

/**
 * has_added_tension_amount
 * @description Checks if the current scope has caused the specified amount of World Tension.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasAddedTensionAmount {
  name: "has_added_tension_amount";
  args: {
    value?: string;
  };
}

/**
 * has_wargoal_against
 * @description Checks if the current scope has any wargoal against the specified country, or a specific type.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasWargoalAgainst {
  name: "has_wargoal_against";
  args: {
    target?: string;
    type?: string;
  };
}

/**
 * is_justifying_wargoal_against
 * @description Checks if the current scope is justifying a wargoal against the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsJustifyingWargoalAgainst {
  name: "is_justifying_wargoal_against";
  args: {
    country?: string;
  };
}

/**
 * has_annex_war_goal
 * @description Checks if the current scope has the Annex wargoal against the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasAnnexWarGoal {
  name: "has_annex_war_goal";
  args: {
    country?: string;
  };
}

/**
 * any_claim
 * @description Checks if the current scope has any claims on another country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAnyClaim {
  name: "any_claim";
  args: {
    value?: boolean;
  };
}

/**
 * is_in_peace_conference
 * @description Checks if the current scope is in a peace conference.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsInPeaceConference {
  name: "is_in_peace_conference";
  args: {
    value?: boolean;
  };
}

/**
 * controls_province
 * @description Checks if the current scope has control of the specified province.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerControlsProvince {
  name: "controls_province";
  args: {
    id?: number;
  };
}

/**
 * longest_war_length
 * @description Checks how long a country has been at war, in months.
 * @since 1.14
 * @scope {country}
 */
export interface TriggerLongestWarLength {
  name: "longest_war_length";
  args: {
    months?: number;
  };
}

/**
 * war_length_with
 * @description Checks how long a country has been at war with specific country, in months.
 * @since 1.14
 * @scope {country}
 */
export interface TriggerWarLengthWith {
  name: "war_length_with";
  args: {
    tag?: string;
    months?: number;
  };
}

/**
 * has_truce_with
 * @description Checks if the country has truce with the specified country.
 * @since 1.16
 * @scope {country}
 */
export interface TriggerHasTruceWith {
  name: "has_truce_with";
  args: {
    country?: string;
  };
}

/**
 * controls_state
 * @description Checks if the current scope has control of the specified state.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerControlsState {
  name: "controls_state";
  args: {
    state?: string;
  };
}

/**
 * owns_state
 * @description Checks if the current scope owns the specified state.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerOwnsState {
  name: "owns_state";
  args: {
    state?: string;
  };
}

/**
 * num_of_controlled_states
 * @description Checks if the current scope has the specified amount of controlled states.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNumOfControlledStates {
  name: "num_of_controlled_states";
  args: {
    value?: number;
  };
}

/**
 * num_occupied_states
 * @description Checks if the current scope has the specified amount of occupied states.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNumOccupiedStates {
  name: "num_occupied_states";
  args: {
    value?: number;
  };
}

/**
 * has_full_control_of_state
 * @description Checks if the current scope has total control (100% occupation) of the specified state.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerHasFullControlOfState {
  name: "has_full_control_of_state";
  args: {
    state?: string;
  };
}

/**
 * has_resources_rights
 * @description Checks if there are any resource rights with the specified parameters.
 * @since 1.12
 * @scope {country | state}
 */
export interface TriggerHasResourcesRights {
  name: "has_resources_rights";
  args: {
    state?: string;
    receiver?: string;
    resources?: string;
  };
}

/**
 * core_compliance
 * @description Compares the average compliance of core states of the specified country within controlled states of the current scope.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerCoreCompliance {
  name: "core_compliance";
  args: {
    occupied_country_tag?: string;
    value?: number;
  };
}

/**
 * core_resistance
 * @description Compares the average resistance of core states of the specified country within controlled states of the current scope.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerCoreResistance {
  name: "core_resistance";
  args: {
    occupied_country_tag?: string;
    value?: number;
  };
}

/**
 * garrison_manpower_need
 * @description Checks how much garrison manpower we need for resistance in controlled states.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerGarrisonManpowerNeed {
  name: "garrison_manpower_need";
  args: {
    value?: number;
  };
}

/**
 * has_core_occupation_modifier
 * @description Checks if the current scope has an occupation modifier for resistance/compliance that applies to our occupied states of a specified country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerHasCoreOccupationModifier {
  name: "has_core_occupation_modifier";
  args: {
    occupied_country_tag?: string;
    modifier?: string;
  };
}

/**
 * occupation_law
 * @description Checks the occupation law that's either the default or applied over a specific country.
 * @since 1.12
 * @scope {country | state}
 */
export interface TriggerOccupationLaw {
  name: "occupation_law";
  args: {
    law?: string;
  };
}

/**
 * has_contested_owner
 * @description Checks if a state has the specified country as a contested owner.
 * @since 1.15
 * @scope {country | state}
 */
export interface TriggerHasContestedOwner {
  name: "has_contested_owner";
  args: {
    owner?: string;
  };
}

/**
 * owns_any_state_of
 * @description Check if the country owns any of the states in the list.
 * @since 1.16
 * @scope {country}
 */
export interface TriggerOwnsAnyStateOf {
  name: "owns_any_state_of";
  args: {
    states?: string;
  };
}

/**
 * has_army_experience
 * @description Checks if the current scope has the specified amount of Army experience.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerHasArmyExperience {
  name: "has_army_experience";
  args: {
    value?: string;
  };
}

/**
 * has_air_experience
 * @description Checks if the current scope has the specified amount of Air experience.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerHasAirExperience {
  name: "has_air_experience";
  args: {
    value?: string;
  };
}

/**
 * has_navy_experience
 * @description Checks if the current scope has the specified amount of Navy experience.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerHasNavyExperience {
  name: "has_navy_experience";
  args: {
    value?: string;
  };
}

/**
 * has_manpower
 * @description Checks if the current scope has the specified amount of manpower.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasManpower {
  name: "has_manpower";
  args: {
    value?: string;
  };
}

/**
 * has_army_manpower
 * @description Checks if the current scope has an army using the specified amount of manpower.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasArmyManpower {
  name: "has_army_manpower";
  args: {
    size?: number;
  };
}

/**
 * manpower_per_military_factory
 * @description Checks if the current scope has the specified manpower times their number of military factories.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerManpowerPerMilitaryFactory {
  name: "manpower_per_military_factory";
  args: {
    value?: number;
  };
}

/**
 * conscription_ratio
 * @description Checks if the current scope has the specified conscription ratio currently.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerConscriptionRatio {
  name: "conscription_ratio";
  args: {
    ratio?: string;
  };
}

/**
 * current_conscription_amount
 * @description Checks if the current scope has already conscripted that much manpower.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerCurrentConscriptionAmount {
  name: "current_conscription_amount";
  args: {
    amount?: string;
  };
}

/**
 * target_conscription_amount
 * @description Checks if the current scope is targeting to conscript that much manpower.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerTargetConscriptionAmount {
  name: "target_conscription_amount";
  args: {
    amount?: string;
  };
}

/**
 * num_divisions
 * @description Checks if the current scope has the specified amount of divisions.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerNumDivisions {
  name: "num_divisions";
  args: {
    value?: number;
  };
}

/**
 * num_of_nukes
 * @description Checks if the current scope has the specified amount of nukes.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNumOfNukes {
  name: "num_of_nukes";
  args: {
    value?: number;
  };
}

/**
 * casualties
 * @description Checks if the current scope has suffered the specified amount of casualties.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerCasualties {
  name: "casualties";
  args: {
    value?: number;
  };
}

/**
 * casualties_k
 * @description Checks if the current scope has suffered the specified amount of casualties in thousands.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerCasualtiesK {
  name: "casualties_k";
  args: {
    value?: number;
  };
}

/**
 * casualties_inflicted_by
 * @description Checks if the current scope has suffered the specified amount of casualties in thousands from a specific country.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerCasualtiesInflictedBy {
  name: "casualties_inflicted_by";
  args: {
    opponent?: string;
    thousands?: number;
  };
}

/**
 * amount_manpower_in_deployment_queue
 * @description Checks if the current scope has the specified amount of manpower in their deployment queue.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerAmountManpowerInDeploymentQueue {
  name: "amount_manpower_in_deployment_queue";
  args: {
    value?: number;
  };
}

/**
 * has_attache_from
 * @description Checks if the current scope has an attache from the specified scope.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerHasAttacheFrom {
  name: "has_attache_from";
  args: {
    country?: string;
  };
}

/**
 * has_attache
 * @description Checks if the current scope has an attache.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerHasAttache {
  name: "has_attache";
  args: {
    value?: boolean;
  };
}

/**
 * is_lend_leasing
 * @description Checks if the current scope is lend leasing to the specified scope.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsLendLeasing {
  name: "is_lend_leasing";
  args: {
    country?: string;
  };
}

/**
 * has_template
 * @description Checks if the current scope has a division template of the specified name.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasTemplate {
  name: "has_template";
  args: {
    name?: string;
  };
}

/**
 * has_template_majority_unit
 * @description Checks if the current scope has a division template composed mostly of the specified unit.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasTemplateMajorityUnit {
  name: "has_template_majority_unit";
  args: {
    unit?: string;
  };
}

/**
 * has_template_containing_unit
 * @description Checks if the current scope has a division template contained any of the specified unit.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasTemplateContainingUnit {
  name: "has_template_containing_unit";
  args: {
    unit?: string;
  };
}

/**
 * strength_ratio
 * @description Checks if the current scope has the specified strength ratio against the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerStrengthRatio {
  name: "strength_ratio";
  args: {
    tag?: string;
    ratio?: number;
  };
}

/**
 * fighting_army_strength_ratio
 * @description Compares the total army fighting strength between the scope country and the one set with 'tag'.
 * @since 1.15
 * @scope {country}
 */
export interface TriggerFightingArmyStrengthRatio {
  name: "fighting_army_strength_ratio";
  args: {
    tag?: string;
    ratio?: string;
  };
}

/**
 * naval_strength_ratio
 * @description Checks if the current scope has the specified naval strength ratio against the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerNavalStrengthRatio {
  name: "naval_strength_ratio";
  args: {
    tag?: string;
    ratio?: number;
  };
}

/**
 * naval_strength_comparison
 * @description Checks if the current scope has the specified naval strength ratio against the specified country.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerNavalStrengthComparison {
  name: "naval_strength_comparison";
  args: {
    other?: string;
    tooltip?: string;
    ratio?: number;
    sub_unit_def_weights?: string;
  };
}

/**
 * alliance_strength_ratio
 * @description Checks if the current scope and allies has an army strength higher than the specified ratio against estimated enemy strength.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAllianceStrengthRatio {
  name: "alliance_strength_ratio";
  args: {
    ratio?: string;
  };
}

/**
 * alliance_naval_strength_ratio
 * @description Checks if the current scope and allies has an naval strength ratio higher than the specified ratio against estimated enemy strength.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAllianceNavalStrengthRatio {
  name: "alliance_naval_strength_ratio";
  args: {
    ratio?: string;
  };
}

/**
 * enemies_strength_ratio
 * @description Checks if the estimated enemy army strength ratio is higher than the specified ratio.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerEnemiesStrengthRatio {
  name: "enemies_strength_ratio";
  args: {
    ratio?: string;
  };
}

/**
 * enemies_naval_strength_ratio
 * @description Checks if the estimated enemy naval strength ratio is higher than the specified ratio.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerEnemiesNavalStrengthRatio {
  name: "enemies_naval_strength_ratio";
  args: {
    ratio?: string;
  };
}

/**
 * has_army_size
 * @description Checks if the current scope has the specified number of divisions, or of a specified type of division.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasArmySize {
  name: "has_army_size";
  args: {
    size?: number;
    type?: string;
  };
}

/**
 * has_navy_size
 * @description Checks if the current scope has the specified number of ships, or of a specified type of ship.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasNavySize {
  name: "has_navy_size";
  args: {
    size?: string;
    type?: string;
    archetype?: string;
  };
}

/**
 * has_deployed_air_force_size
 * @description Checks if the current scope has the specified number of aircraft, or of a specified type of aircraft.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasDeployedAirForceSize {
  name: "has_deployed_air_force_size";
  args: {
    size?: number;
    type?: string;
  };
}

/**
 * divisions_in_state
 * @description Checks if the specified state contains the specified amount of divisions.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerDivisionsInState {
  name: "divisions_in_state";
  args: {
    size?: number;
    type?: string;
    unit?: string;
    state?: string;
  };
}

/**
 * army_manpower_in_state
 * @description Checks if the specified state contains the specified amount of army manpower within the state.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerArmyManpowerInState {
  name: "army_manpower_in_state";
  args: {
    amount?: number;
    type?: string;
    state?: string;
  };
}

/**
 * divisions_in_border_state
 * @description Checks if the border provinces between the specified state and border state contain the specified amount of divisions.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerDivisionsInBorderState {
  name: "divisions_in_border_state";
  args: {
    size?: number;
    type?: string;
    state?: string;
    border_state?: string;
  };
}

/**
 * num_divisions_in_states
 * @description Checks if the specified states contain enough divisions of the specified types.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerNumDivisionsInStates {
  name: "num_divisions_in_states";
  args: {
    count?: number;
    states?: string;
    types?: string;
    exclude?: string;
  };
}

/**
 * num_battalions_in_states
 * @description Checks if the specified states contain enough battalions (or sub-units) of the specified types.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerNumBattalionsInStates {
  name: "num_battalions_in_states";
  args: {
    count?: number;
    states?: string;
    types?: string;
    exclude?: string;
  };
}

/**
 * ships_in_state_ports
 * @description Checks if the specified state contains the specified amount of ships, or of ships of the specified type.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerShipsInStatePorts {
  name: "ships_in_state_ports";
  args: {
    size?: number;
    type?: string;
    state?: string;
  };
}

/**
 * num_planes_stationed_in_regions
 * @description Checks if the current scope has the specified number of aircraft stationed within strategic regions.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerNumPlanesStationedInRegions {
  name: "num_planes_stationed_in_regions";
  args: {
    value?: number;
    regions?: string;
  };
}

/**
 * has_volunteers_amount_from
 * @description Checks if the current scope has recieved volunteers from the specified country of the specified amounts.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasVolunteersAmountFrom {
  name: "has_volunteers_amount_from";
  args: {
    tag?: string;
    count?: number;
  };
}

/**
 * convoy_threat
 * @description Checks how much the convoys are threatened.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerConvoyThreat {
  name: "convoy_threat";
  args: {
    value?: number;
  };
}

/**
 * has_mined
 * @description Checks if the current scope has X mines on the coast of the specified country.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerHasMined {
  name: "has_mined";
  args: {
    target?: string;
    value?: number;
  };
}

/**
 * has_mines
 * @description Checks if the current scope has at least X mines within the specified strategic region.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerHasMines {
  name: "has_mines";
  args: {
    region?: number;
    amount?: number;
  };
}

/**
 * mine_threat
 * @description Checks how dangerous enemy mines are.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerMineThreat {
  name: "mine_threat";
  args: {
    value?: number;
  };
}

/**
 * has_military_industrial_organization
 * @description Checks if the current scope has a MIO with the specified name.
 * @since 1.13
 * @scope {country}
 */
export interface TriggerHasMilitaryIndustrialOrganization {
  name: "has_military_industrial_organization";
  args: {
    id?: string;
  };
}

/**
 * stockpile_ratio
 * @description Checks if the current scope has stockpiled the specified equipment to the specified ratio against fielded equipment of the same type.
 * @since 1.5
 * @scope {country}
 */
export interface TriggerStockpileRatio {
  name: "stockpile_ratio";
  args: {
    archetype?: string;
    ratio?: number;
  };
}

/**
 * has_equipment
 * @description Checks if the current scope has the specified equipment to the specified amount.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasEquipment {
  name: "has_equipment";
  args: {
    equipment_name?: string;
  };
}

/**
 * has_any_license
 * @description Checks if the current scope has any licenses from other countries.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasAnyLicense {
  name: "has_any_license";
  args: {
    value?: boolean;
  };
}

/**
 * is_licensing_any_to
 * @description Checks if the current scope is licensing to the specified scope.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsLicensingAnyTo {
  name: "is_licensing_any_to";
  args: {
    country?: string;
  };
}

/**
 * is_licensing_to
 * @description Checks if the current scope is licensing the specified equipment to the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerIsLicensingTo {
  name: "is_licensing_to";
  args: {
    target?: string;
    archetype?: string;
    equipment?: string;
    version?: number;
  };
}

/**
 * has_license
 * @description Checks if the current scope has a license for the specified equipment from the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasLicense {
  name: "has_license";
  args: {
    from?: string;
    archetype?: string;
    equipment?: string;
    version?: number;
  };
}

/**
 * fuel_ratio
 * @description Checks the fuel ratio of the country.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerFuelRatio {
  name: "fuel_ratio";
  args: {
    ratio?: number;
  };
}

/**
 * has_fuel
 * @description Checks the fuel amount of the country.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerHasFuel {
  name: "has_fuel";
  args: {
    amount?: number;
  };
}

/**
 * has_design_based_on
 * @description Checks if the country has a builtable non-obsolete design based on the specified equipment archetype.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerHasDesignBasedOn {
  name: "has_design_based_on";
  args: {
    archetype?: string;
  };
}

/**
 * estimated_intel_max_piercing
 * @description Checks if the specified scope has the specified amount of piercing based on the current scope's intel.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerEstimatedIntelMaxPiercing {
  name: "estimated_intel_max_piercing";
  args: {
    tag?: string;
    value?: number;
  };
}

/**
 * estimated_intel_max_armor
 * @description Checks if the specified scope has the specified amount of armor based on the current scope's intel.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerEstimatedIntelMaxArmor {
  name: "estimated_intel_max_armor";
  args: {
    tag?: string;
    value?: number;
  };
}

/**
 * compare_intel_with
 * @description Compares intel between 2 countries.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerCompareIntelWith {
  name: "compare_intel_with";
  args: {
    target?: string;
    civilian_intel?: number;
    army_intel?: number;
    navy_intel?: number;
    airforce_intel?: number;
  };
}

/**
 * intel_level_over
 * @description Checks the intel level from the current country over a specified country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerIntelLevelOver {
  name: "intel_level_over";
  args: {
    target?: string;
    civilian_intel?: number;
    army_intel?: number;
    navy_intel?: number;
    airforce_intel?: number;
  };
}

/**
 * has_intelligence_agency
 * @description Checks if the current scope has an intelligence agency.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerHasIntelligenceAgency {
  name: "has_intelligence_agency";
  args: {
    value?: boolean;
  };
}

/**
 * network_national_coverage
 * @description Checks network national coverage over a specific country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerNetworkNationalCoverage {
  name: "network_national_coverage";
  args: {
    target?: string;
    value?: number;
  };
}

/**
 * network_strength
 * @description Checks network strength over a specific country or in a specific state.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerNetworkStrength {
  name: "network_strength";
  args: {
    target?: string;
    state?: number;
    value?: number;
  };
}

/**
 * has_done_agency_upgrade
 * @description Checks if the current scope has the specified agency upgrade (to its highest level).
 * @since 1.9
 * @scope {country}
 */
export interface TriggerHasDoneAgencyUpgrade {
  name: "has_done_agency_upgrade";
  args: {
    upgrade?: string;
  };
}

/**
 * agency_upgrade_number
 * @description Checks the number of upgrades done in the current scope's intelligence agency.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerAgencyUpgradeNumber {
  name: "agency_upgrade_number";
  args: {
    value?: number;
  };
}

/**
 * decryption_progress
 * @description Checks the decryption progress towards a country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerDecryptionProgress {
  name: "decryption_progress";
  args: {
    target?: string;
    value?: number;
  };
}

/**
 * has_captured_operative
 * @description Checks if the current scope has captured an operative.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerHasCapturedOperative {
  name: "has_captured_operative";
  args: {
    country_or_bool?: string;
  };
}

/**
 * has_finished_collecting_for_operation
 * @description Checks if the current scope has finished collecting resources for an operation.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerHasFinishedCollectingForOperation {
  name: "has_finished_collecting_for_operation";
  args: {
    target?: string;
    operation?: string;
  };
}

/**
 * is_preparing_operation
 * @description Checks if the current scope is preparing an operation against the specified country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerIsPreparingOperation {
  name: "is_preparing_operation";
  args: {
    target?: string;
    operation?: string;
  };
}

/**
 * is_running_operation
 * @description Checks if the current scope is running an operation against the specified country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerIsRunningOperation {
  name: "is_running_operation";
  args: {
    target?: string;
    operation?: string;
  };
}

/**
 * num_finished_operations
 * @description Checks how many finished operations the current scope had against the specified country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerNumFinishedOperations {
  name: "num_finished_operations";
  args: {
    target?: string;
    operation?: string;
  };
}

/**
 * has_operation_token
 * @description Checks if the current scope has an operation token against an another country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerHasOperationToken {
  name: "has_operation_token";
  args: {
    tag?: string;
    token?: string;
  };
}

/**
 * is_active_decryption_bonuses_enabled
 * @description Checks if the current scope has any decryption bonuses towards the specified country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerIsActiveDecryptionBonusesEnabled {
  name: "is_active_decryption_bonuses_enabled";
  args: {
    country?: string;
  };
}

/**
 * is_cryptology_department_active
 * @description Checks if the current scope has a cryptology department active.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerIsCryptologyDepartmentActive {
  name: "is_cryptology_department_active";
  args: {
    value?: boolean;
  };
}

/**
 * is_decrypting
 * @description Checks if the current scope is decrypting a certain country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerIsDecrypting {
  name: "is_decrypting";
  args: {
    country?: string;
  };
}

/**
 * is_fully_decrypted
 * @description Checks if the current scope has fully decrypted a certain country.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerIsFullyDecrypted {
  name: "is_fully_decrypted";
  args: {
    country?: string;
  };
}

/**
 * num_fake_intel_divisions
 * @description Checks the amount of fake intel divisions.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerNumFakeIntelDivisions {
  name: "num_fake_intel_divisions";
  args: {
    value?: number;
  };
}

/**
 * num_free_operative_slots
 * @description Checks the amount of free operative slots.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerNumFreeOperativeSlots {
  name: "num_free_operative_slots";
  args: {
    value?: number;
  };
}

/**
 * num_operative_slots
 * @description Checks the amount of operative slots.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerNumOperativeSlots {
  name: "num_operative_slots";
  args: {
    value?: number;
  };
}

/**
 * num_of_operatives
 * @description Checks the amount of operatives.
 * @since 1.9
 * @scope {country}
 */
export interface TriggerNumOfOperatives {
  name: "num_of_operatives";
  args: {
    value?: number;
  };
}

/**
 * ai_irrationality
 * @description Checks if the current scope AI has the specified irrationality.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAiIrrationality {
  name: "ai_irrationality";
  args: {
    value?: number;
  };
}

/**
 * ai_liberate_desire
 * @description Checks if the current scope AI has the specified liberation desire towards the specified country.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAiLiberateDesire {
  name: "ai_liberate_desire";
  args: {
    target?: string;
    count?: number;
  };
}

/**
 * ai_has_role_division
 * @description Checks if the current scope AI has a division with the specified role.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAiHasRoleDivision {
  name: "ai_has_role_division";
  args: {
    role?: string;
  };
}

/**
 * ai_has_role_template
 * @description Checks if the current scope AI has a division template with the specified role.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAiHasRoleTemplate {
  name: "ai_has_role_template";
  args: {
    role?: string;
  };
}

/**
 * ai_wants_divisions
 * @description Checks if the current scope AI desires the specified amount of divisions.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerAiWantsDivisions {
  name: "ai_wants_divisions";
  args: {
    value?: number;
  };
}

/**
 * has_template_ai_majority_unit
 * @description Checks if the current scope AI has a division template mostly made up of the specified unit.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasTemplateAiMajorityUnit {
  name: "has_template_ai_majority_unit";
  args: {
    unit?: string;
  };
}

/**
 * can_be_country_leader
 * @description Checks if the specified character has a country leader role, active or not, and can utilise it in this country.
 * @since 1.11
 * @scope {country | character}
 */
export interface TriggerCanBeCountryLeader {
  name: "can_be_country_leader";
  args: {
    character?: string;
  };
}

/**
 * has_character
 * @description Checks if the current scope has the specified character recruited. The character does NOT need to be in power.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerHasCharacter {
  name: "has_character";
  args: {
    character?: string;
  };
}

/**
 * has_country_leader
 * @description Checks if the current scope has the specified country leader.
 * @since 1.3
 * @scope {country}
 */
export interface TriggerHasCountryLeader {
  name: "has_country_leader";
  args: {
    ruling_only?: boolean;
    character?: string;
    name?: string;
    id?: number;
  };
}

/**
 * has_country_leader_ideology
 * @description Checks if the current scope's active country leader has the specified ideology.
 * @since 1.11
 * @scope {country}
 */
export interface TriggerHasCountryLeaderIdeology {
  name: "has_country_leader_ideology";
  args: {
    ideology?: string;
  };
}

/**
 * has_country_leader_with_trait
 * @description Checks if the leader of the country has a specific trait.
 * @since 1.6
 * @scope {country}
 */
export interface TriggerHasCountryLeaderWithTrait {
  name: "has_country_leader_with_trait";
  args: {
    trait?: string;
  };
}

/**
 * is_female
 * @description Checks if the current country leader or character is female.
 * @since 1.9
 * @scope {country | character}
 */
export interface TriggerIsFemale {
  name: "is_female";
  args: {
    value?: boolean;
  };
}

/**
 * has_unit_leader
 * @description Checks if the current scope has a unit leader with the specified id.
 * @since 1.0
 * @scope {country}
 */
export interface TriggerHasUnitLeader {
  name: "has_unit_leader";
  args: {
    id?: number;
  };
}

/**
 * has_scientist_specialization
 * @description Checks if the country in scope has a scientist with a skill level of at least 1 in specialization.
 * @since 1.15
 * @scope {country}
 */
export interface TriggerHasScientistSpecialization {
  name: "has_scientist_specialization";
  args: {
    specialization?: string;
  };
}

/**
 * pc_is_winner
 * @description Checks if the current scope is a winner within the peace conference.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsWinner {
  name: "pc_is_winner";
  args: {
    value?: boolean;
  };
}

/**
 * pc_is_on_winning_side
 * @description Checks if the current scope is on the winning side within the peace conference.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsOnWinningSide {
  name: "pc_is_on_winning_side";
  args: {
    value?: boolean;
  };
}

/**
 * pc_is_loser
 * @description Checks if the current scope is a loser within the peace conference.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsLoser {
  name: "pc_is_loser";
  args: {
    value?: boolean;
  };
}

/**
 * pc_is_untouched_loser
 * @description Checks if the current scope is an untouched loser within the peace conference.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsUntouchedLoser {
  name: "pc_is_untouched_loser";
  args: {
    value?: boolean;
  };
}

/**
 * pc_is_on_same_side_as
 * @description Checks if the current scope is on the same side of the peace conference as the specified country.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsOnSameSideAs {
  name: "pc_is_on_same_side_as";
  args: {
    country?: string;
  };
}

/**
 * pc_is_liberated
 * @description Checks if the current scope has been liberated within the peace conference.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsLiberated {
  name: "pc_is_liberated";
  args: {
    value?: boolean;
  };
}

/**
 * pc_is_liberated_by
 * @description Checks if the current scope has been liberated within the peace conference by the specified country.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsLiberatedBy {
  name: "pc_is_liberated_by";
  args: {
    country?: string;
  };
}

/**
 * pc_is_puppeted
 * @description Checks if the current scope has been puppeted within the peace conference.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsPuppeted {
  name: "pc_is_puppeted";
  args: {
    value?: boolean;
  };
}

/**
 * pc_is_puppeted_by
 * @description Checks if the current scope has been puppeted within the peace conference by the specified country.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsPuppetedBy {
  name: "pc_is_puppeted_by";
  args: {
    country?: string;
  };
}

/**
 * pc_is_forced_government
 * @description Checks if the current scope has had an enforced government change within the peace conference.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsForcedGovernment {
  name: "pc_is_forced_government";
  args: {
    value?: boolean;
  };
}

/**
 * pc_is_forced_government_by
 * @description Checks if the current scope has had an enforced government change within the peace conference demanded by the specified country.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsForcedGovernmentBy {
  name: "pc_is_forced_government_by";
  args: {
    country?: string;
  };
}

/**
 * pc_is_forced_government_to
 * @description Checks if the current scope has had an enforced government change to the specified ideology group.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcIsForcedGovernmentTo {
  name: "pc_is_forced_government_to";
  args: {
    ideology_group?: string;
  };
}

/**
 * pc_total_score
 * @description Checks if the current scope has the specified amount in total score within the peace conference.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcTotalScore {
  name: "pc_total_score";
  args: {
    score?: string;
  };
}

/**
 * pc_current_score
 * @description Checks if the current scope has the specified amount in current score within the peace conference.
 * @since 1.12
 * @scope {country}
 */
export interface TriggerPcCurrentScore {
  name: "pc_current_score";
  args: {
    score?: string;
  };
}

/**
 * state
 * @description Checks if the current scope is the specified state.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerState {
  name: "state";
  args: {
    id?: string;
  };
}

/**
 * region
 * @description Checks if the current scope is a state in the specified strategic region.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerRegion {
  name: "region";
  args: {
    id?: number;
  };
}

/**
 * free_building_slots
 * @description Checks if the current scope has available slots for the specified amount of buildings.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerFreeBuildingSlots {
  name: "free_building_slots";
  args: {
    building?: string;
    size?: number;
    include_locked?: boolean;
  };
}

/**
 * non_damaged_building_level
 * @description Checks if the current scope has the specified amount of the specified buildings that are undamaged.
 * @since 1.9
 * @scope {state}
 */
export interface TriggerNonDamagedBuildingLevel {
  name: "non_damaged_building_level";
  args: {
    building?: string;
    level?: number;
  };
}

/**
 * any_province_building_level
 * @description Checks if the current scope has the specified provincal building at the specified amount in the specified provinces.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerAnyProvinceBuildingLevel {
  name: "any_province_building_level";
  args: {
    province?: string;
    building?: string;
    level?: number;
  };
}

/**
 * has_state_flag
 * @description Checks if the current scope has the specified flag. Can also compare the flag's last set date, days since last set, and/or value.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerHasStateFlag {
  name: "has_state_flag";
  args: {
    flag?: string;
    value?: number;
    date?: string;
    days?: number;
  };
}

/**
 * state_population
 * @description Checks if the current scope has the specified state population.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerStatePopulation {
  name: "state_population";
  args: {
    value?: number;
  };
}

/**
 * state_population_k
 * @description Checks if the current scope has the specified state population in thousands.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerStatePopulationK {
  name: "state_population_k";
  args: {
    value?: number;
  };
}

/**
 * is_capital
 * @description Checks if the current scope is a capital.
 * @since 1.5
 * @scope {state}
 */
export interface TriggerIsCapital {
  name: "is_capital";
  args: {
    value?: boolean;
  };
}

/**
 * is_controlled_by
 * @description Checks if the current scope is controlled by the specified country.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerIsControlledBy {
  name: "is_controlled_by";
  args: {
    country?: string;
  };
}

/**
 * is_fully_controlled_by
 * @description Checks if the current scope is fully controlled by the specified country.
 * @since 1.5
 * @scope {state}
 */
export interface TriggerIsFullyControlledBy {
  name: "is_fully_controlled_by";
  args: {
    country?: string;
  };
}

/**
 * is_owned_by
 * @description Checks if the current scope is owned by the specified country.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerIsOwnedBy {
  name: "is_owned_by";
  args: {
    country?: string;
  };
}

/**
 * is_claimed_by
 * @description Checks if the current scope is claimed by the specified country.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerIsClaimedBy {
  name: "is_claimed_by";
  args: {
    country?: string;
  };
}

/**
 * is_core_of
 * @description Checks if the current scope is a core of the specified country.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerIsCoreOf {
  name: "is_core_of";
  args: {
    country?: string;
  };
}

/**
 * is_owned_and_controlled_by
 * @description Checks if the current scope is owned and controlled by the specified country.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerIsOwnedAndControlledBy {
  name: "is_owned_and_controlled_by";
  args: {
    country?: string;
  };
}

/**
 * is_demilitarized_zone
 * @description Checks if the current scope is a demilitarized zone.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerIsDemilitarizedZone {
  name: "is_demilitarized_zone";
  args: {
    value?: boolean;
  };
}

/**
 * is_border_conflict
 * @description Checks if the current scope is part of a border war.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerIsBorderConflict {
  name: "is_border_conflict";
  args: {
    value?: boolean;
  };
}

/**
 * is_in_home_area
 * @description Checks if the current scope is connected to the capital state over land.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerIsInHomeArea {
  name: "is_in_home_area";
  args: {
    value?: boolean;
  };
}

/**
 * is_coastal
 * @description Checks if the current scope is a coastal state.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerIsCoastal {
  name: "is_coastal";
  args: {
    value?: boolean;
  };
}

/**
 * is_one_state_island
 * @description Checks if the current scope is a coastal state with no adjacent land states.
 * @since 1.13
 * @scope {state}
 */
export interface TriggerIsOneStateIsland {
  name: "is_one_state_island";
  args: {
    value?: boolean;
  };
}

/**
 * is_island_state
 * @description Checks if the current scope is a state where every province has no land neighbour.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerIsIslandState {
  name: "is_island_state";
  args: {
    value?: boolean;
  };
}

/**
 * is_on_continent
 * @description Checks if the current scope is on the specified continent.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerIsOnContinent {
  name: "is_on_continent";
  args: {
    continent?: string;
  };
}

/**
 * impassable
 * @description Checks if the current scope is impassable.
 * @since 1.9.1
 * @scope {state}
 */
export interface TriggerImpassable {
  name: "impassable";
  args: {
    value?: boolean;
  };
}

/**
 * has_state_category
 * @description Checks if the current scope has the specified category.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerHasStateCategory {
  name: "has_state_category";
  args: {
    category?: string;
  };
}

/**
 * state_strategic_value
 * @description Checks if the current scope has the specified strategic value.
 * @since 1.5
 * @scope {state}
 */
export interface TriggerStateStrategicValue {
  name: "state_strategic_value";
  args: {
    value?: number;
  };
}

/**
 * state_and_terrain_strategic_value
 * @description Checks if the current scope has the specified state and terrain strategic value.
 * @since 1.5
 * @scope {state}
 */
export interface TriggerStateAndTerrainStrategicValue {
  name: "state_and_terrain_strategic_value";
  args: {
    value?: number;
  };
}

/**
 * num_owned_neighbour_states
 * @description Checks if the current scope has the specified amount of neighbor states belonging to the specified country.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerNumOwnedNeighbourStates {
  name: "num_owned_neighbour_states";
  args: {
    owner?: string;
    count?: number;
  };
}

/**
 * distance_to
 * @description Checks if the current scope is at the specified distance from the specified state.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerDistanceTo {
  name: "distance_to";
  args: {
    value?: number;
    target?: string;
  };
}

/**
 * ships_in_area
 * @description Checks if the current scope has the specified amount of ships in the specified strategic region.
 * @since 1.0
 * @scope {state}
 */
export interface TriggerShipsInArea {
  name: "ships_in_area";
  args: {
    area?: number;
    size?: number;
  };
}

/**
 * resource_count_trigger
 * @description Checks if the current scope has the specified amount of the specified resource. Name is the resource, e.g. 'tungsten'.
 * @since ???
 * @scope {state | country}
 */
export interface TriggerResourceCountTrigger {
  name: "resource_count_trigger";
  args: {
    resource_name?: number;
  };
}

/**
 * has_resources_amount
 * @description Checks if the current scope has the specified amount of the specified resource.
 * @since 1.3
 * @scope {state}
 */
export interface TriggerHasResourcesAmount {
  name: "has_resources_amount";
  args: {
    resource?: string;
    amount?: number;
    delivered?: boolean;
  };
}

/**
 * days_since_last_strategic_bombing
 * @description Checks how many days have passed since the last strategic bombing of the state.
 * @since 1.6
 * @scope {state}
 */
export interface TriggerDaysSinceLastStrategicBombing {
  name: "days_since_last_strategic_bombing";
  args: {
    days?: number;
  };
}

/**
 * has_railway_connection
 * @description Returns true if the states or provinces are connected by a railway.
 * @since 1.11
 * @scope {state}
 */
export interface TriggerHasRailwayConnection {
  name: "has_railway_connection";
  args: {
    start_state?: string;
    target_state?: string;
    start_province?: number;
    target_province?: number;
  };
}

/**
 * can_build_railway
 * @description Returns true if a railway can be built between states or provinces.
 * @since 1.11
 * @scope {state}
 */
export interface TriggerCanBuildRailway {
  name: "can_build_railway";
  args: {
    start_state?: string;
    target_state?: string;
    start_province?: number;
    target_province?: number;
  };
}

/**
 * has_railway_level
 * @description Checks if a state contains a railway at or above the specified level.
 * @since 1.11
 * @scope {state}
 */
export interface TriggerHasRailwayLevel {
  name: "has_railway_level";
  args: {
    state?: string;
    level?: number;
  };
}

/**
 * pc_does_state_stack_demilitarized
 * @description Checks if the current scope was demilitarised during a current or previously-ended peace conference.
 * @since 1.12
 * @scope {state}
 */
export interface TriggerPcDoesStateStackDemilitarized {
  name: "pc_does_state_stack_demilitarized";
  args: {
    value?: boolean;
  };
}

/**
 * pc_does_state_stack_dismantled
 * @description Checks if the current scope was dismantled during a current or previously-ended peace conference.
 * @since 1.12
 * @scope {state}
 */
export interface TriggerPcDoesStateStackDismantled {
  name: "pc_does_state_stack_dismantled";
  args: {
    value?: boolean;
  };
}

/**
 * pc_is_state_claimed
 * @description Checks if the current scope was claimed by any country during the peace conference.
 * @since 1.12.8
 * @scope {state}
 */
export interface TriggerPcIsStateClaimed {
  name: "pc_is_state_claimed";
  args: {
    value?: boolean;
  };
}

/**
 * pc_is_state_claimed_by
 * @description Checks if the current scope was claimed by the specified country during the peace conference.
 * @since 1.12
 * @scope {state}
 */
export interface TriggerPcIsStateClaimedBy {
  name: "pc_is_state_claimed_by";
  args: {
    country?: string;
  };
}

/**
 * pc_is_state_claimed_and_taken_by
 * @description Checks if the current scope was claimed with 'Take State' action (i.e. annexed) by the specified country during the peace conference.
 * @since 1.12
 * @scope {state}
 */
export interface TriggerPcIsStateClaimedAndTakenBy {
  name: "pc_is_state_claimed_and_taken_by";
  args: {
    country?: string;
  };
}

/**
 * pc_is_state_outside_influence_for_winner
 * @description Checks if the current state is outside of the influence of the specified winner country.
 * @since 1.12.8
 * @scope {state}
 */
export interface TriggerPcIsStateOutsideInfluenceForWinner {
  name: "pc_is_state_outside_influence_for_winner";
  args: {
    country?: string;
  };
}

/**
 * pc_turn
 * @description Compares the amount of turns that have passed during the peace conference with a number.
 * @since 1.12.8
 * @scope {state}
 */
export interface TriggerPcTurn {
  name: "pc_turn";
  args: {
    turns?: number;
  };
}

/**
 * can_construct_building
 * @description Checks if the country (as ROOT) and state in scope can build a building in the state.
 * @since 1.15
 * @scope {state}
 */
export interface TriggerCanConstructBuilding {
  name: "can_construct_building";
  args: {
    building_type?: string;
  };
}

/**
 * compliance
 * @description Compares the compliance value of the current scope with the given value.
 * @since 1.9
 * @scope {state}
 */
export interface TriggerCompliance {
  name: "compliance";
  args: {
    value?: number;
  };
}

/**
 * compliance_speed
 * @description Compares the compliance speed of the current scope with the given value.
 * @since 1.9
 * @scope {state}
 */
export interface TriggerComplianceSpeed {
  name: "compliance_speed";
  args: {
    value?: number;
  };
}

/**
 * has_active_resistance
 * @description Checks if the current scope has non-zero resistance.
 * @since 1.9
 * @scope {state}
 */
export interface TriggerHasActiveResistance {
  name: "has_active_resistance";
  args: {
    value?: boolean;
  };
}

/**
 * has_resistance
 * @description Checks if the current scope has resistance.
 * @since 1.9
 * @scope {state}
 */
export interface TriggerHasResistance {
  name: "has_resistance";
  args: {
    value?: boolean;
  };
}

/**
 * resistance
 * @description Compares the resistance value of the current scope with the given value.
 * @since 1.9
 * @scope {state}
 */
export interface TriggerResistance {
  name: "resistance";
  args: {
    value?: number;
  };
}

/**
 * resistance_speed
 * @description Compares the resistance speed of the current scope with the given value.
 * @since 1.9
 * @scope {state}
 */
export interface TriggerResistanceSpeed {
  name: "resistance_speed";
  args: {
    value?: number;
  };
}

/**
 * resistance_target
 * @description Compares the target resistance value of the current scope with the given value.
 * @since 1.9
 * @scope {state}
 */
export interface TriggerResistanceTarget {
  name: "resistance_target";
  args: {
    value?: number;
  };
}

/**
 * has_occupation_modifier
 * @description Checks if the current scope has an occupation modifier, changing resistance/compliance.
 * @since 1.9
 * @scope {state}
 */
export interface TriggerHasOccupationModifier {
  name: "has_occupation_modifier";
  args: {
    modifier?: string;
  };
}

/**
 * occupied_country_tag
 * @description Checks which country creates resistance.
 * @since 1.9
 * @scope {state}
 */
export interface TriggerOccupiedCountryTag {
  name: "occupied_country_tag";
  args: {
    tag?: string;
  };
}

/**
 * is_character
 * @description Checks if the current character's token matches up with the specified one.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsCharacter {
  name: "is_character";
  args: {
    id?: string;
  };
}

/**
 * is_country_leader
 * @description Checks if the character in the current scope is the active country leader.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsCountryLeader {
  name: "is_country_leader";
  args: {
    value?: boolean;
  };
}

/**
 * is_unit_leader
 * @description Checks if the character in the current scope has an active unit leader (Army/Navy leader) role.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsUnitLeader {
  name: "is_unit_leader";
  args: {
    value?: boolean;
  };
}

/**
 * is_advisor
 * @description Checks if the character in the current scope has an advisor role (includes advisors/theorists/high command).
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsAdvisor {
  name: "is_advisor";
  args: {
    value?: boolean;
  };
}

/**
 * is_air_chief
 * @description Checks if the character in the current scope is selected as an air chief.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsAirChief {
  name: "is_air_chief";
  args: {
    value?: boolean;
  };
}

/**
 * is_army_chief
 * @description Checks if the character in the current scope is selected as an army chief.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsArmyChief {
  name: "is_army_chief";
  args: {
    value?: boolean;
  };
}

/**
 * is_army_leader
 * @description Checks if the character in the current scope has an army leader (General/Field Marshal) role.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsArmyLeader {
  name: "is_army_leader";
  args: {
    value?: boolean;
  };
}

/**
 * is_navy_chief
 * @description Checks if the character in the current scope is selected as a navy chief.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsNavyChief {
  name: "is_navy_chief";
  args: {
    value?: boolean;
  };
}

/**
 * is_navy_leader
 * @description Checks if the character in the current scope has an navy leader (Admiral) role.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsNavyLeader {
  name: "is_navy_leader";
  args: {
    value?: boolean;
  };
}

/**
 * is_high_command
 * @description Checks if the character in the current scope is selected as high command.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsHighCommand {
  name: "is_high_command";
  args: {
    value?: boolean;
  };
}

/**
 * is_corps_commander
 * @description Checks if the character in the current scope is a corps commander.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsCorpsCommander {
  name: "is_corps_commander";
  args: {
    value?: boolean;
  };
}

/**
 * is_operative
 * @description Checks if the character in the current scope is an operative.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsOperative {
  name: "is_operative";
  args: {
    value?: boolean;
  };
}

/**
 * is_political_advisor
 * @description Checks if the character in the current scope is selected as a political advisor.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsPoliticalAdvisor {
  name: "is_political_advisor";
  args: {
    value?: boolean;
  };
}

/**
 * is_theorist
 * @description Checks if the character in the current scope is selected as a theorist.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsTheorist {
  name: "is_theorist";
  args: {
    value?: boolean;
  };
}

/**
 * is_character_slot
 * @description Checks if the character in the current scope has a role within the specified character slot.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsCharacterSlot {
  name: "is_character_slot";
  args: {
    slot?: string;
  };
}

/**
 * has_air_ledger
 * @description Checks if the character in the current scope has an air ledger.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerHasAirLedger {
  name: "has_air_ledger";
  args: {
    value?: boolean;
  };
}

/**
 * has_army_ledger
 * @description Checks if the character in the current scope has an army ledger.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerHasArmyLedger {
  name: "has_army_ledger";
  args: {
    value?: boolean;
  };
}

/**
 * has_navy_ledger
 * @description Checks if the character in the current scope has an navy ledger.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerHasNavyLedger {
  name: "has_navy_ledger";
  args: {
    value?: boolean;
  };
}

/**
 * has_character_flag
 * @description Checks if the current scope has the specified flag. Can also compare the flag's last set date, days since last set, and/or value.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerHasCharacterFlag {
  name: "has_character_flag";
  args: {
    flag?: string;
    value?: number;
    date?: string;
    days?: number;
  };
}

/**
 * has_trait
 * @description Checks if the current scope has the specified trait.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerHasTrait {
  name: "has_trait";
  args: {
    trait?: string;
  };
}

/**
 * has_id
 * @description Checks if the current character has the specificed ID.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerHasId {
  name: "has_id";
  args: {
    id?: number;
  };
}

/**
 * is_hired_as_advisor
 * @description Checks if the current character is activated as an advisor in any slot.
 * @since 1.12.10
 * @scope {character}
 */
export interface TriggerIsHiredAsAdvisor {
  name: "is_hired_as_advisor";
  args: {
    value?: boolean;
  };
}

/**
 * not_already_hired_except_as
 * @description Checks if the current character is not hired, with the exception of the specified slot.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerNotAlreadyHiredExceptAs {
  name: "not_already_hired_except_as";
  args: {
    slot?: string;
  };
}

/**
 * advisor_can_be_fired
 * @description Checks if the current character's can_be_fired attribute is set or not within a certain slot.
 * @since 1.12.8
 * @scope {character}
 */
export interface TriggerAdvisorCanBeFired {
  name: "advisor_can_be_fired";
  args: {
    value?: boolean;
    slot?: string;
  };
}

/**
 * has_advisor_role
 * @description Checks if the character in scope has an advisor role for the given slot.
 * @since ???
 * @scope {character}
 */
export interface TriggerHasAdvisorRole {
  name: "has_advisor_role";
  args: {
    slot?: string;
  };
}

/**
 * has_ideology
 * @description Checks if the current character has the specificed sub-ideology assigned.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerHasIdeology {
  name: "has_ideology";
  args: {
    ideology?: string;
  };
}

/**
 * has_ideology_group
 * @description Checks if the current character has the specificed ideology assigned.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerHasIdeologyGroup {
  name: "has_ideology_group";
  args: {
    ideology?: string;
  };
}

/**
 * has_unit_leader_flag
 * @description Deprecated. Use has_character_flag instead. Compares the specified flag's last set date, days since last set, and/or value.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerHasUnitLeaderFlag {
  name: "has_unit_leader_flag";
  args: {
    flag?: string;
    value?: number;
    date?: string;
    days?: number;
  };
}

/**
 * is_leading_army
 * @description Checks if the current scope is leading a single army.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerIsLeadingArmy {
  name: "is_leading_army";
  args: {
    value?: boolean;
  };
}

/**
 * is_leading_army_group
 * @description Checks if the current scope is leading an army group.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerIsLeadingArmyGroup {
  name: "is_leading_army_group";
  args: {
    value?: boolean;
  };
}

/**
 * is_leading_volunteer_group
 * @description Checks if the current scope is leading a volunteer army within the specified country.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsLeadingVolunteerGroup {
  name: "is_leading_volunteer_group";
  args: {
    country?: string;
  };
}

/**
 * is_leading_volunteer_group_with_original_country
 * @description Checks if the current scope is leading a volunteer army within a country of the specified original tag.
 * @since 1.11
 * @scope {character}
 */
export interface TriggerIsLeadingVolunteerGroupWithOriginalCountry {
  name: "is_leading_volunteer_group_with_original_country";
  args: {
    country?: string;
  };
}

/**
 * is_field_marshal
 * @description Checks if the current scope is a Field Marshal.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerIsFieldMarshal {
  name: "is_field_marshal";
  args: {
    value?: boolean;
  };
}

/**
 * is_assigned
 * @description Checks if the current scope is an assigned unit leader.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerIsAssigned {
  name: "is_assigned";
  args: {
    value?: boolean;
  };
}

/**
 * can_select_trait
 * @description Checks if the current scope can select the specified trait.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerCanSelectTrait {
  name: "can_select_trait";
  args: {
    trait?: string;
  };
}

/**
 * has_ability
 * @description Checks if the current scope has the specified unit leader ability.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerHasAbility {
  name: "has_ability";
  args: {
    ability?: string;
  };
}

/**
 * skill
 * @description Checks if the current scope has a Skill above the specified amount.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerSkill {
  name: "skill";
  args: {
    value?: number;
  };
}

/**
 * skill_advantage
 * @description Checks if the current scope has a Skill advantage above the specified amount in against an enemy unit leader whilst in combat.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerSkillAdvantage {
  name: "skill_advantage";
  args: {
    value?: number;
  };
}

/**
 * planning_skill_level
 * @description Checks if the current scope has a Planning skill above the specified amount.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerPlanningSkillLevel {
  name: "planning_skill_level";
  args: {
    value?: number;
  };
}

/**
 * logistics_skill_level
 * @description Checks if the current scope has a Logistics skill above the specified amount.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerLogisticsSkillLevel {
  name: "logistics_skill_level";
  args: {
    value?: number;
  };
}

/**
 * defense_skill_level
 * @description Checks if the current scope has a Defense skill above the specified amount.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerDefenseSkillLevel {
  name: "defense_skill_level";
  args: {
    value?: number;
  };
}

/**
 * attack_skill_level
 * @description Checks if the current scope has a Attack skill above the specified amount.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerAttackSkillLevel {
  name: "attack_skill_level";
  args: {
    value?: number;
  };
}

/**
 * average_stats
 * @description Checks if the current scope has an average skill above the specified amount.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerAverageStats {
  name: "average_stats";
  args: {
    value?: number;
  };
}

/**
 * is_border_war
 * @description Checks if the current scope is in a border war.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerIsBorderWar {
  name: "is_border_war";
  args: {
    value?: boolean;
  };
}

/**
 * num_units
 * @description Checks if the current scope is commanding the specified amount of divisions.
 * @since 1.5
 * @scope {character}
 */
export interface TriggerNumUnits {
  name: "num_units";
  args: {
    value?: number;
  };
}

/**
 * is_exiled_leader
 * @description Checks if the current scope is a general from an exiled country.
 * @since 1.6
 * @scope {character}
 */
export interface TriggerIsExiledLeader {
  name: "is_exiled_leader";
  args: {
    value?: boolean;
  };
}

/**
 * is_exiled_leader_from
 * @description Checks if the current scope is a general from the specified exiled country.
 * @since 1.6
 * @scope {character}
 */
export interface TriggerIsExiledLeaderFrom {
  name: "is_exiled_leader_from";
  args: {
    country?: string;
  };
}

/**
 * has_nationality
 * @description Checks if the current operative has the nationality.
 * @since 1.9
 * @scope {character}
 */
export interface TriggerHasNationality {
  name: "has_nationality";
  args: {
    country?: string;
  };
}

/**
 * is_operative_captured
 * @description Checks if the current scope is captured.
 * @since 1.9
 * @scope {character}
 */
export interface TriggerIsOperativeCaptured {
  name: "is_operative_captured";
  args: {
    value?: boolean;
  };
}

/**
 * operative_leader_mission
 * @description Checks if the current scope is on the given mission.
 * @since 1.9
 * @scope {character}
 */
export interface TriggerOperativeLeaderMission {
  name: "operative_leader_mission";
  args: {
    mission?: string;
  };
}

/**
 * operative_leader_operation
 * @description Checks if the current scope is on the given operation.
 * @since 1.9
 * @scope {character}
 */
export interface TriggerOperativeLeaderOperation {
  name: "operative_leader_operation";
  args: {
    operation?: string;
  };
}

/**
 * has_scientist_level
 * @description Checks if the scientist of the character in scope matches the skill level condition for a specialization.
 * @since 1.15
 * @scope {character}
 */
export interface TriggerHasScientistLevel {
  name: "has_scientist_level";
  args: {
    level?: number;
    specialization?: string;
  };
}

/**
 * is_active_scientist
 * @description Checks if the scientist of the character in scope is assigned to a project.
 * @since 1.15
 * @scope {character}
 */
export interface TriggerIsActiveScientist {
  name: "is_active_scientist";
  args: {
    value?: boolean;
  };
}

/**
 * is_scientist_injured
 * @description Checks if the scientist of the character in scope is injured.
 * @since 1.15
 * @scope {character}
 */
export interface TriggerIsScientistInjured {
  name: "is_scientist_injured";
  args: {
    value?: boolean;
  };
}

/**
 * hardness
 * @description Checks if the current scope has the specified amount of hardness.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerHardness {
  name: "hardness";
  args: {
    value?: number;
  };
}

/**
 * armor
 * @description Checks if the current scope has the specified amount of armor units.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerArmor {
  name: "armor";
  args: {
    value?: number;
  };
}

/**
 * dig_in
 * @description Checks if the current scope has the specified amount of Dig In bonus.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerDigIn {
  name: "dig_in";
  args: {
    value?: number;
  };
}

/**
 * min_planning
 * @description Checks if the current scope has the specified amount of planning.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerMinPlanning {
  name: "min_planning";
  args: {
    value?: number;
  };
}

/**
 * fastest_unit
 * @description Checks if the current scope has a unit with the specified speed.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerFastestUnit {
  name: "fastest_unit";
  args: {
    speed?: number;
  };
}

/**
 * temperature
 * @description Checks if the current scope is in a province with a temperature above the specified amount.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerTemperature {
  name: "temperature";
  args: {
    celsius?: number;
  };
}

/**
 * reserves
 * @description Checks if the current scope has the specified amount of reserves waiting.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerReserves {
  name: "reserves";
  args: {
    value?: number;
  };
}

/**
 * has_combat_modifier
 * @description Checks if the current scope has the specified combat modifier.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerHasCombatModifier {
  name: "has_combat_modifier";
  args: {
    modifier?: string;
  };
}

/**
 * is_fighting_in_terrain
 * @description Checks if the current scope is fighting in the specified terrain.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerIsFightingInTerrain {
  name: "is_fighting_in_terrain";
  args: {
    terrain?: string;
  };
}

/**
 * is_fighting_in_weather
 * @description Checks if the current scope is fighting in the specified weather.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerIsFightingInWeather {
  name: "is_fighting_in_weather";
  args: {
    weather?: string;
  };
}

/**
 * phase
 * @description Checks if the current scope is in phase.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerPhase {
  name: "phase";
  args: {
    value?: boolean;
  };
}

/**
 * recon_advantage
 * @description Checks if the current scope has x recon advantage.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerReconAdvantage {
  name: "recon_advantage";
  args: {
    value?: number;
  };
}

/**
 * night
 * @description Checks if the current scope is fighting at night.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerNight {
  name: "night";
  args: {
    value?: boolean;
  };
}

/**
 * frontage_full
 * @description Checks if the current scope has a full combat width.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerFrontageFull {
  name: "frontage_full";
  args: {
    value?: boolean;
  };
}

/**
 * has_flanked_opponent
 * @description Checks if the current scope has flanked their opponent.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerHasFlankedOpponent {
  name: "has_flanked_opponent";
  args: {
    value?: boolean;
  };
}

/**
 * has_max_planning
 * @description Checks if the current scope has the maximum planning bonus.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerHasMaxPlanning {
  name: "has_max_planning";
  args: {
    value?: boolean;
  };
}

/**
 * has_reserves
 * @description Checks if the current scope has any reserves waiting.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerHasReserves {
  name: "has_reserves";
  args: {
    value?: boolean;
  };
}

/**
 * is_amphibious_invasion
 * @description Checks if the current scope is performing an amphibious invasion.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerIsAmphibiousInvasion {
  name: "is_amphibious_invasion";
  args: {
    value?: boolean;
  };
}

/**
 * is_attacker
 * @description Checks if the current scope is attacking.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerIsAttacker {
  name: "is_attacker";
  args: {
    value?: boolean;
  };
}

/**
 * is_defender
 * @description Checks if the current scope is defending.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerIsDefender {
  name: "is_defender";
  args: {
    value?: boolean;
  };
}

/**
 * is_winning
 * @description Checks if the current scope is winning their battle.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerIsWinning {
  name: "is_winning";
  args: {
    value?: boolean;
  };
}

/**
 * is_fighting_air_units
 * @description Checks if the current scope is fighting air units.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerIsFightingAirUnits {
  name: "is_fighting_air_units";
  args: {
    value?: boolean;
  };
}

/**
 * less_combat_width_than_opponent
 * @description Checks if the current scope is fighting with less combat width than their opponent.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerLessCombatWidthThanOpponent {
  name: "less_combat_width_than_opponent";
  args: {
    value?: boolean;
  };
}

/**
 * has_carrier_airwings_on_mission
 * @description Checks if the current scope has carrier airwings on a mission.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerHasCarrierAirwingsOnMission {
  name: "has_carrier_airwings_on_mission";
  args: {
    value?: boolean;
  };
}

/**
 * has_carrier_airwings_in_own_combat
 * @description Checks if the current scope has carrier airwings in their own combat.
 * @since 1.0
 * @scope {combat}
 */
export interface TriggerHasCarrierAirwingsInOwnCombat {
  name: "has_carrier_airwings_in_own_combat";
  args: {
    value?: boolean;
  };
}

/**
 * has_artillery_ratio
 * @description Check that ratio of atrillery battalions in the composition of a side of combating troops are over a certain level.
 * @since ???
 * @scope {combat}
 */
export interface TriggerHasArtilleryRatio {
  name: "has_artillery_ratio";
  args: {
    ratio?: number;
  };
}

/**
 * has_unit_type
 * @description Check if the combatant has at least one of the provided unit types.
 * @since ???
 * @scope {combat}
 */
export interface TriggerHasUnitType {
  name: "has_unit_type";
  args: {
    unit_type?: string;
  };
}

/**
 * division_has_majority_template
 * @description Checks if the current scope is majority made up of the specified battalion.
 * @since 1.12
 * @scope {division}
 */
export interface TriggerDivisionHasMajorityTemplate {
  name: "division_has_majority_template";
  args: {
    battalion?: string;
  };
}

/**
 * division_has_battalion_in_template
 * @description Checks if the current scope has any battalions of the type in the template.
 * @since 1.12
 * @scope {division}
 */
export interface TriggerDivisionHasBattalionInTemplate {
  name: "division_has_battalion_in_template";
  args: {
    battalion?: string;
  };
}

/**
 * unit_strength
 * @description Checks the current strength of the unit on the scale from 0 to 1.
 * @since 1.12
 * @scope {division}
 */
export interface TriggerUnitStrength {
  name: "unit_strength";
  args: {
    value?: number;
  };
}

/**
 * unit_organisation
 * @description Checks the current organisation of the unit on the scale from 0 to 1.
 * @since 1.12
 * @scope {division}
 */
export interface TriggerUnitOrganisation {
  name: "unit_organisation";
  args: {
    value?: number;
  };
}

/**
 * is_unit_template_reserves
 * @description Checks if the current division has the supply priority set to 'Reserves'.
 * @since 1.12
 * @scope {division}
 */
export interface TriggerIsUnitTemplateReserves {
  name: "is_unit_template_reserves";
  args: {
    value?: boolean;
  };
}

/**
 * is_military_industrial_organization
 * @description Checks if the currently-scoped MIO matches the input token.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerIsMilitaryIndustrialOrganization {
  name: "is_military_industrial_organization";
  args: {
    token?: string;
  };
}

/**
 * is_mio_visible
 * @description Checks if the currently-scoped MIO is visible.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerIsMioVisible {
  name: "is_mio_visible";
  args: {
    value?: boolean;
  };
}

/**
 * is_mio_available
 * @description Checks if the currently-scoped MIO is available.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerIsMioAvailable {
  name: "is_mio_available";
  args: {
    value?: boolean;
  };
}

/**
 * is_mio_assigned_to_task
 * @description Checks if the currently-scoped MIO is assigned to a task.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerIsMioAssignedToTask {
  name: "is_mio_assigned_to_task";
  args: {
    value?: boolean;
  };
}

/**
 * has_mio_size
 * @description Checks the size of the MIO.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerHasMioSize {
  name: "has_mio_size";
  args: {
    size?: number;
  };
}

/**
 * has_mio_trait
 * @description Checks whether the MIO has the target trait in its list.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerHasMioTrait {
  name: "has_mio_trait";
  args: {
    token?: string;
  };
}

/**
 * is_mio_trait_available
 * @description Checks whether the MIO has the target trait in its list and whether it's available.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerIsMioTraitAvailable {
  name: "is_mio_trait_available";
  args: {
    token?: string;
    check_mio_parent_completed?: boolean;
    check_mio_mutually_exclusive?: boolean;
  };
}

/**
 * is_mio_trait_completed
 * @description Checks whether the MIO has the target trait in its list and whether it's completed.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerIsMioTraitCompleted {
  name: "is_mio_trait_completed";
  args: {
    token?: string;
  };
}

/**
 * has_mio_number_of_completed_traits
 * @description Checks the amount of unlocked MIO traits.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerHasMioNumberOfCompletedTraits {
  name: "has_mio_number_of_completed_traits";
  args: {
    value?: number;
  };
}

/**
 * has_mio_flag
 * @description Checks if the current scope has the specified flag. Can also compare the flag's last set date, days since last set, and/or value.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerHasMioFlag {
  name: "has_mio_flag";
  args: {
    flag?: string;
    value?: number;
    date?: string;
    days?: number;
  };
}

/**
 * has_mio_policy
 * @description Checks if the currently-scoped MIO has the target policy allowed.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerHasMioPolicy {
  name: "has_mio_policy";
  args: {
    policy?: string;
  };
}

/**
 * has_mio_policy_active
 * @description Checks if the currently-scoped MIO has the target policy active.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerHasMioPolicyActive {
  name: "has_mio_policy_active";
  args: {
    policy?: string;
  };
}

/**
 * has_mio_research_category
 * @description Checks if the currently-scoped MIO has the target research category.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerHasMioResearchCategory {
  name: "has_mio_research_category";
  args: {
    category?: string;
  };
}

/**
 * has_mio_equipment_type
 * @description Checks if the currently-scoped MIO has the target equipment types.
 * @since 1.13
 * @scope {mio}
 */
export interface TriggerHasMioEquipmentType {
  name: "has_mio_equipment_type";
  args: {
    type?: string;
  };
}

/**
 * contract_contains_equipment
 * @description Checks if the currently-scoped purchase contract contains an equipment type.
 * @since 1.13
 * @scope {contract}
 */
export interface TriggerContractContainsEquipment {
  name: "contract_contains_equipment";
  args: {
    type?: string;
  };
}

/**
 * deal_completion
 * @description Checks the deal completion with the target value.
 * @since 1.13
 * @scope {contract}
 */
export interface TriggerDealCompletion {
  name: "deal_completion";
  args: {
    progress?: string;
  };
}

/**
 * seller
 * @description Checks the seller in the current purchase contract.
 * @since 1.13
 * @scope {contract}
 */
export interface TriggerSeller {
  name: "seller";
  args: {
    country?: string;
  };
}

/**
 * buyer
 * @description Checks the buyer in the current purchase contract.
 * @since 1.13
 * @scope {contract}
 */
export interface TriggerBuyer {
  name: "buyer";
  args: {
    country?: string;
  };
}

/**
 * has_project_flag
 * @description Check if flag has been set within the special project in scope. May checks on the value or date/days since last modified date.
 * @since 1.15
 * @scope {special_project}
 */
export interface TriggerHasProjectFlag {
  name: "has_project_flag";
  args: {
    flag?: string;
    value?: number;
    date?: string;
    days?: number;
  };
}

export type Hoi4Command = EffectAddDynamicModifier | EffectRemoveDynamicModifier | EffectForceUpdateDynamicModifier | EffectSetGlobalFlag | EffectPlaySong | EffectClrGlobalFlag | EffectModifyGlobalFlag | EffectCustomEffectTooltip | EffectCustomOverrideTooltip | EffectEffectTooltip | EffectLog | EffectSaveEventTargetAs | EffectSaveGlobalEventTargetAs | EffectClearGlobalEventTarget | EffectClearGlobalEventTargets | EffectSoundEffect | EffectRandomizeWeather | EffectSetProvinceName | EffectResetProvinceName | EffectDamageUnits | EffectCreateEntity | EffectDestroyEntity | EffectSetEntityMovement | EffectSetEntityPosition | EffectSetEntityRotation | EffectSetEntityScale | EffectSetEntityAnimation | EffectBuildRailway | EffectEventOptionTooltip | EffectCreatePurchaseContract | EffectStartBorderWar | EffectSetBorderWarData | EffectCancelBorderWar | EffectFinalizeBorderWar | EffectSetVariable | EffectSetVariableToRandom | EffectClearVariable | EffectAddToVariable | EffectSubtractFromVariable | EffectMultiplyVariable | EffectDivideVariable | EffectModuloVariable | EffectRoundVariable | EffectClampVariable | EffectCareerProfileSetTempPlaythroughVariable | EffectCareerProfileSetTempVariable | EffectAddToArray | EffectRemoveFromArray | EffectClearArray | EffectResizeArray | EffectFindHighestInArray | EffectFindLowestInArray | EffectSetCountryFlag | EffectClrCountryFlag | EffectModifyCountryFlag | EffectCountryEvent | EffectNewsEvent | EffectSetCosmeticTag | EffectDropCosmeticTag | EffectSetRule | EffectSetPartyRule | EffectAddRelationRuleOverride | EffectRemoveRelationRuleOverride | EffectScopedSoundEffect | EffectScopedPlaySong | EffectGotoProvince | EffectGotoState | EffectChangeTagFrom | EffectReserveDynamicCountry | EffectForceUpdateMapMode | EffectAddAiStrategy | EffectCreateDynamicCountry | EffectAddStateCore | EffectRemoveStateCore | EffectSetCapital | EffectAddStateClaim | EffectRemoveStateClaim | EffectSetStateOwner | EffectSetStateController | EffectAddContestedOwner | EffectRemoveContestedOwner | EffectTransferState | EffectSetProvinceController | EffectAddPoliticalPower | EffectSetPoliticalPower | EffectAddStability | EffectSetStability | EffectAddWarSupport | EffectSetWarSupport | EffectAddCommandPower | EffectAddManpower | EffectArmyExperience | EffectNavyExperience | EffectAirExperience | EffectSetPolitics | EffectSetPopularities | EffectAddPopularity | EffectSetPoliticalParty | EffectSetPartyName | EffectHoldElection | EffectSetPowerBalance | EffectRemovePowerBalance | EffectAddPowerBalanceValue | EffectAddPowerBalanceModifier | EffectRemovePowerBalanceModifier | EffectRemoveAllPowerBalanceModifiers | EffectSetPowerBalanceGfx | EffectSetMajor | EffectCreateFaction | EffectAddToFaction | EffectLeaveFaction | EffectRemoveFromFaction | EffectDismantleFaction | EffectSetFactionName | EffectSetFactionLeader | EffectSetFactionSpymaster | EffectRelease | EffectReleaseOnControlled | EffectReleasePuppet | EffectReleasePuppetOnControlled | EffectReleaseAutonomy | EffectGiveGuarantee | EffectGiveMilitaryAccess | EffectRecallAttache | EffectDiplomaticRelation | EffectAddOpinionModifier | EffectRemoveOpinionModifier | EffectReverseAddOpinionModifier | EffectAddRelationModifier | EffectRemoveRelationModifier | EffectAddCollaboration | EffectSetCollaboration | EffectRecallVolunteersFrom | EffectSetOccupationLaw | EffectSetOccupationLawWhereAvailable | EffectSendEmbargo | EffectBreakEmbargo | EffectGiveMarketAccess | EffectPuppet | EffectEndPuppet | EffectAddAutonomyRatio | EffectAddAutonomyScore | EffectSetAutonomy | EffectAddLegitimacy | EffectSetLegitimacy | EffectBecomeExiledIn | EffectEndExile | EffectAddThreat | EffectAddNamedThreat | EffectAnnexCountry | EffectAddToWar | EffectDeclareWarOn | EffectWhitePeace | EffectStartPeaceConference | EffectSetTruce | EffectCreateWargoal | EffectRemoveWargoal | EffectStartCivilWar | EffectAddCivilWarTarget | EffectRemoveCivilWarTarget | EffectTransferUnitsFraction | EffectAddNuclearBombs | EffectLaunchNuke | EffectAddResource | EffectCreateImport | EffectGiveResourceRights | EffectRemoveResourceRights | EffectAddFuel | EffectSetFuel | EffectSetFuelRatio | EffectAddOffsiteBuilding | EffectModifyBuildingResources | EffectDamageBuilding | EffectLoadFocusTree | EffectUnlockNationalFocus | EffectCompleteNationalFocus | EffectUncompleteNationalFocus | EffectMarkFocusTreeLayoutDirty | EffectActivateShineOnFocus | EffectDeactivateShineOnFocus | EffectActivateDecision | EffectActivateTargetedDecision | EffectRemoveTargetedDecision | EffectUnlockDecisionTooltip | EffectUnlockDecisionCategoryTooltip | EffectAddDaysRemove | EffectRemoveDecision | EffectRemoveDecisionOnCooldown | EffectActivateMission | EffectActivateMissionTooltip | EffectRemoveMission | EffectAddDaysMissionTimeout | EffectAddResearchSlot | EffectSetResearchSlots | EffectAddTechBonus | EffectSetTechnology | EffectAddToTechSharingGroup | EffectRemoveFromTechSharingGroup | EffectModifyTechSharingBonus | EffectInheritTechnology | EffectAddDoctrineCostReduction | EffectMarkTechnologyTreeLayoutDirty | EffectAddIdeas | EffectAddTimedIdea | EffectModifyTimedIdea | EffectSwapIdeas | EffectRemoveIdeas | EffectRemoveIdeasWithTrait | EffectShowIdeasTooltip | EffectLoadOob | EffectDivisionTemplate | EffectCreateColonialDivisionTemplate | EffectAddUnitsToDivisionTemplate | EffectSetDivisionTemplateLock | EffectCountryLockAllDivisionTemplate | EffectSetDivisionForceAllowRecruiting | EffectSetDivisionTemplateCap | EffectClearDivisionTemplateCap | EffectDeleteUnitTemplateAndUnits | EffectDeleteUnit | EffectDeleteUnits | EffectCreateRailwayGun | EffectTeleportRailwayGunsToDeployProvince | EffectAddUnitBonus | EffectSetEquipmentFraction | EffectAddEquipmentToStockpile | EffectSendEquipment | EffectSendEquipmentFraction | EffectCreateProductionLicense | EffectAddEquipmentSubsidy | EffectAddCic | EffectCreateEquipmentVariant | EffectAddEquipmentProduction | EffectAddDesignTemplateBonus | EffectAddEquipmentBonus | EffectSetEquipmentVersionNumber | EffectDestroyShips | EffectTransferNavy | EffectTransferShip | EffectCreateShip | EffectAddMines | EffectAddAce | EffectCreateIntelligenceAgency | EffectUpgradeIntelligenceAgency | EffectAddDecryption | EffectAddIntel | EffectAddOperationToken | EffectRemoveOperationToken | EffectCaptureOperative | EffectCreateOperativeLeader | EffectFreeOperative | EffectFreeRandomOperative | EffectKillOperative | EffectTurnOperative | EffectStealRandomTechBonus | EffectSetNationality | EffectRetireCharacter | EffectSetCharacterName | EffectCharacterListTooltip | EffectAddTrait | EffectRemoveTrait | EffectCreateCorpsCommander | EffectCreateFieldMarshal | EffectCreateNavyLeader | EffectRemoveUnitLeader | EffectAddCorpsCommanderRole | EffectAddFieldMarshalRole | EffectAddNavalCommanderRole | EffectShowUnitLeadersTooltip | EffectCreateCountryLeader | EffectAddCountryLeaderRole | EffectPromoteCharacter | EffectRemoveCountryLeaderRole | EffectKillIdeologyLeader | EffectRetireIdeologyLeader | EffectKillCountryLeader | EffectRetireCountryLeader | EffectSetCountryLeaderIdeology | EffectSetCountryLeaderDescription | EffectSetCountryLeaderName | EffectSetCountryLeaderPortrait | EffectAddCountryLeaderTrait | EffectRemoveCountryLeaderTrait | EffectSwapRulerTraits | EffectSwapCountryLeaderTraits | EffectActivateAdvisor | EffectDeactivateAdvisor | EffectAddAdvisorRole | EffectRemoveAdvisorRole | EffectSetCanBeFiredInAdvisorRole | EffectAddScientistRole | EffectRemoveScientistRole | EffectGenerateScientistCharacter | EffectShowMioTooltip | EffectUnlockMilitaryIndustrialOrganizationTooltip | EffectUnlockMioPolicyTooltip | EffectAddMioPolicyCost | EffectSetMioPolicyCost | EffectAddMioPolicyCooldown | EffectSetMioPolicyCooldown | EffectCompleteSpecialProject | EffectAddBreakthroughPoints | EffectAddBreakthroughProgress | EffectCareerProfileStepMissiolini | EffectRecruitCharacter | EffectGenerateCharacter | EffectSetOob | EffectSetNavalOob | EffectSetAirOob | EffectSetKeyedOob | EffectGetHighestScoredCountryTemp | EffectGetSortedScoredCountriesTemp | EffectGetSupplyVehicles | EffectGetSupplyVehiclesTemp | EffectStateEvent | EffectSetStateFlag | EffectClrStateFlag | EffectModifyStateFlag | EffectSetStateName | EffectResetStateName | EffectAddClaimBy | EffectRemoveClaimBy | EffectAddCoreOf | EffectRemoveCoreOf | EffectSetDemilitarizedZone | EffectSetStateCategory | EffectAddStateModifier | EffectSetBorderWar | EffectCreateUnit | EffectTeleportArmies | EffectAddProvinceModifier | EffectRemoveProvinceModifier | EffectAddVictoryPoints | EffectSetVictoryPoints | EffectSetStateProvinceController | EffectTransferStateTo | EffectSetStateOwnerTo | EffectSetStateControllerTo | EffectAddExtraStateSharedBuildingSlots | EffectAddBuildingConstruction | EffectSetBuildingLevel | EffectRemoveBuilding | EffectConstructBuildingInRandomProvince | EffectAddCompliance | EffectAddResistance | EffectAddResistanceTarget | EffectCancelResistance | EffectForceDisableResistance | EffectForceEnableResistance | EffectRemoveResistanceTarget | EffectSetCompliance | EffectSetResistance | EffectStartResistance | EffectSetGarrisonStrength | EffectRaidReduceProjectProgressRatio | EffectSetCharacterFlag | EffectClrCharacterFlag | EffectModifyCharacterFlag | EffectRetire | EffectSetPortraits | EffectAddScientistLevel | EffectInjureScientistForDays | EffectAddScientistTrait | EffectAddScientistXp | EffectUnitLeaderEvent | EffectSetUnitLeaderFlag | EffectClrUnitLeaderFlag | EffectModifyUnitLeaderFlag | EffectPromoteLeader | EffectDemoteLeader | EffectAddUnitLeaderTrait | EffectRemoveUnitLeaderTrait | EffectAddRandomTrait | EffectAddTimedUnitLeaderTrait | EffectReplaceUnitLeaderTrait | EffectRemoveExileTag | EffectGainXp | EffectRemoveUnitLeader | EffectRemoveUnitLeaderRole | EffectSupplyUnits | EffectAddMaxTrait | EffectAddSkillLevel | EffectAddLogistics | EffectAddPlanning | EffectAddDefense | EffectAddAttack | EffectAddCoordination | EffectAddManeuver | EffectAddTemporaryBuffToUnits | EffectAddNationality | EffectCaptureOperative | EffectForceOperativeLeaderIntoHiding | EffectFreeOperative | EffectHarmOperativeLeader | EffectKillOperative | EffectTurnOperative | EffectOperativeLeaderEvent | EffectDestroyUnit | EffectAddHistoryEntry | EffectChangeDivisionTemplate | EffectAddRandomValidTraitFromUnit | EffectAddUnitMedalToLatestEntry | EffectAddDivisionalCommanderXp | EffectReseedDivisionCommander | EffectSetUnitOrganization | EffectAddMioFunds | EffectSetMioFunds | EffectAddMioFundsGainFactor | EffectSetMioFundsGainFactor | EffectAddMioSize | EffectAddMioSizeUpRequirementFactor | EffectSetMioSizeUpRequirementFactor | EffectAddMioTaskCapacity | EffectSetMioTaskCapacity | EffectAddMioResearchBonus | EffectSetMioResearchBonus | EffectSetMioNameKey | EffectSetMioIcon | EffectAddMioDesignTeamAssignCost | EffectSetMioDesignTeamAssignCost | EffectAddMioIndustrialManufacturerAssignCost | EffectSetMioIndustrialManufacturerAssignCost | EffectAddMioDesignTeamChangeCost | EffectSetMioDesignTeamChangeCost | EffectUnlockMioTraitTooltip | EffectCompleteMioTrait | EffectSetMioFlag | EffectClrMioFlag | EffectModifyMioFlag | EffectCancelPurchaseContract | EffectAddRaidHistoryEntry | EffectRaidAddUnitExperience | EffectRaidDamageUnits | EffectAddProjectProgressRatio | EffectCompletePrototypeRewardOption | EffectSetProjectFlag | EffectClrProjectFlag | EffectModifyProjectFlag | EffectExecuteOperationCoordinatedStrike | TriggerAllCountry | TriggerAnyCountry | TriggerAllOtherCountry | TriggerAnyOtherCountry | TriggerAllCountryWithOriginalTag | TriggerAnyCountryWithOriginalTag | TriggerAllNeighborCountry | TriggerAnyNeighborCountry | TriggerAnyHomeAreaNeighborCountry | TriggerAllGuaranteedCountry | TriggerAnyGuaranteedCountry | TriggerAllAlliedCountry | TriggerAnyAlliedCountry | TriggerAllOccupiedCountry | TriggerAnyOccupiedCountry | TriggerAllEnemyCountry | TriggerAnyEnemyCountry | TriggerAllSubjectCountries | TriggerAnySubjectCountry | TriggerAnyCountryWithCore | TriggerAllState | TriggerAnyState | TriggerAnyStateIn | TriggerAllNeighborState | TriggerAnyNeighborState | TriggerAllOwnedState | TriggerAnyOwnedState | TriggerAllCoreState | TriggerAnyCoreState | TriggerAllControlledState | TriggerAnyControlledState | TriggerAllUnitLeader | TriggerAnyUnitLeader | TriggerAllArmyLeader | TriggerAnyArmyLeader | TriggerAllNavyLeader | TriggerAnyNavyLeader | TriggerAllOperativeLeader | TriggerAnyOperativeLeader | TriggerAllCharacter | TriggerAnyCharacter | TriggerAnyCountryDivision | TriggerAnyStateDivision | TriggerAllMilitaryIndustrialOrganization | TriggerAnyMilitaryIndustrialOrganization | TriggerAllPurchaseContract | TriggerAnyPurchaseContract | TriggerAllScientists | TriggerAnyScientist | TriggerAllActiveScientist | TriggerAnyActiveScientist | TriggerAND | TriggerOR | TriggerNOT | TriggerCountTriggers | TriggerIf | TriggerHiddenTrigger | TriggerCustomTriggerTooltip | TriggerCustomOverrideTooltip | TriggerAlways | TriggerHasGlobalFlag | TriggerHasDlc | TriggerHasStartDate | TriggerDate | TriggerDifficulty | TriggerHasAnyCustomDifficultySetting | TriggerHasCustomDifficultySetting | TriggerGameRulesAllowAchievements | TriggerCountryExists | TriggerIsIronman | TriggerIsHistoricalFocusOn | TriggerIsTutorial | TriggerIsDebug | TriggerThreat | TriggerHasGameRule | TriggerHasCompletedCustomAchievement | TriggerHasVariable | TriggerCheckVariable | TriggerLog | TriggerPrintVariables | TriggerExists | TriggerTag | TriggerOriginalTag | TriggerIsAi | TriggerHasCollaboration | TriggerHasCountryFlag | TriggerHasCosmeticTag | TriggerHasEventTarget | TriggerHasDecision | TriggerHasDynamicModifier | TriggerHasActiveMission | TriggerHasCountryCustomDifficultySetting | TriggerHasTerrain | TriggerIsDynamicCountry | TriggerNumOfSupplyNodes | TriggerHasResourcesInCountry | TriggerHasFocusTree | TriggerHasCompletedFocus | TriggerFocusProgress | TriggerHasShineEffectOnFocus | TriggerIdeology | TriggerHasPoliticalPower | TriggerPoliticalPowerDaily | TriggerPoliticalPowerGrowth | TriggerCommandPower | TriggerCommandPowerDaily | TriggerHasWarSupport | TriggerHasStability | TriggerHasGovernment | TriggerHasElections | TriggerIsStagingCoup | TriggerIsTargetOfCoup | TriggerHasCivilWar | TriggerCivilwarTarget | TriggerHasManpowerForRecruitChangeTo | TriggerHasRule | TriggerHasCasualtiesWarSupport | TriggerHasConvoysWarSupport | TriggerHasBombingWarSupport | TriggerHasPowerBalance | TriggerHasAnyPowerBalance | TriggerPowerBalanceValue | TriggerPowerBalanceDailyChange | TriggerPowerBalanceWeeklyChange | TriggerIsPowerBalanceInRange | TriggerIsPowerBalanceSideActive | TriggerHasPowerBalanceModifier | TriggerBuildingCountTrigger | TriggerNumOfMilitaryFactories | TriggerNumOfCivilianFactories | TriggerNumOfNavalFactories | TriggerNumOfAvailableMilitaryFactories | TriggerNumOfAvailableCivilianFactories | TriggerNumOfAvailableNavalFactories | TriggerNumOfFactories | TriggerNumOfControlledFactories | TriggerNumOfOwnedFactories | TriggerNumOfCivilianFactoriesAvailableForProjects | TriggerIcRatio | TriggerHasDamagedBuildings | TriggerHasBuilt | TriggerHasTech | TriggerIsResearchingTechnology | TriggerCanResearch | TriggerOriginalResearchSlots | TriggerAmountResearchSlots | TriggerIsInTechSharingGroup | TriggerNumTechSharingGroups | TriggerHasTechBonus | TriggerLandDoctrineLevel | TriggerNumResearchedTechnologies | TriggerIsSpecialProjectCompleted | TriggerHasIdea | TriggerHasIdeaWithTrait | TriggerHasAllowedIdeaWithTraits | TriggerHasAvailableIdeaWithTraits | TriggerAmountTakenIdeas | TriggerIsMajor | TriggerIsAllyWith | TriggerIsInFactionWith | TriggerIsInFaction | TriggerIsFactionLeader | TriggerIsSpymaster | TriggerNumFactionMembers | TriggerHasNonAggressionPactWith | TriggerIsGuaranteedBy | TriggerHasGuaranteed | TriggerHasMilitaryAccessTo | TriggerGivesMilitaryAccessTo | TriggerIsNeighborOf | TriggerIsOwnerNeighborOf | TriggerIsPuppetOf | TriggerIsSubjectOf | TriggerIsPuppet | TriggerIsSubject | TriggerHasSubject | TriggerNumSubjects | TriggerHasAutonomyState | TriggerCompareAutonomyState | TriggerCompareAutonomyProgressRatio | TriggerHasOpinionModifier | TriggerHasOpinion | TriggerHasRelationModifier | TriggerHasLegitimacy | TriggerIsExileHost | TriggerIsHostingExile | TriggerIsGovernmentInExile | TriggerIsExiledIn | TriggerReceivedExpeditionaryForces | TriggerCanDeclareWarOn | TriggerForeignManpower | TriggerIsEmbargoedBy | TriggerIsEmbargoing | TriggerHasWar | TriggerHasWarWith | TriggerHasOffensiveWarWith | TriggerHasDefensiveWarWith | TriggerHasOffensiveWar | TriggerHasDefensiveWar | TriggerHasWarTogetherWith | TriggerHasWarWithMajor | TriggerHasWarWithWargoalAgainst | TriggerSurrenderProgress | TriggerAnyWarScore | TriggerHasCapitulated | TriggerDaysSinceCapitulated | TriggerHasBorderWarWith | TriggerHasBorderWarBetween | TriggerHasBorderWar | TriggerHasAddedTensionAmount | TriggerHasWargoalAgainst | TriggerIsJustifyingWargoalAgainst | TriggerHasAnnexWarGoal | TriggerAnyClaim | TriggerIsInPeaceConference | TriggerControlsProvince | TriggerLongestWarLength | TriggerWarLengthWith | TriggerHasTruceWith | TriggerControlsState | TriggerOwnsState | TriggerNumOfControlledStates | TriggerNumOccupiedStates | TriggerHasFullControlOfState | TriggerHasResourcesRights | TriggerCoreCompliance | TriggerCoreResistance | TriggerGarrisonManpowerNeed | TriggerHasCoreOccupationModifier | TriggerOccupationLaw | TriggerHasContestedOwner | TriggerOwnsAnyStateOf | TriggerHasArmyExperience | TriggerHasAirExperience | TriggerHasNavyExperience | TriggerHasManpower | TriggerHasArmyManpower | TriggerManpowerPerMilitaryFactory | TriggerConscriptionRatio | TriggerCurrentConscriptionAmount | TriggerTargetConscriptionAmount | TriggerNumDivisions | TriggerNumOfNukes | TriggerCasualties | TriggerCasualtiesK | TriggerCasualtiesInflictedBy | TriggerAmountManpowerInDeploymentQueue | TriggerHasAttacheFrom | TriggerHasAttache | TriggerIsLendLeasing | TriggerHasTemplate | TriggerHasTemplateMajorityUnit | TriggerHasTemplateContainingUnit | TriggerStrengthRatio | TriggerFightingArmyStrengthRatio | TriggerNavalStrengthRatio | TriggerNavalStrengthComparison | TriggerAllianceStrengthRatio | TriggerAllianceNavalStrengthRatio | TriggerEnemiesStrengthRatio | TriggerEnemiesNavalStrengthRatio | TriggerHasArmySize | TriggerHasNavySize | TriggerHasDeployedAirForceSize | TriggerDivisionsInState | TriggerArmyManpowerInState | TriggerDivisionsInBorderState | TriggerNumDivisionsInStates | TriggerNumBattalionsInStates | TriggerShipsInStatePorts | TriggerNumPlanesStationedInRegions | TriggerHasVolunteersAmountFrom | TriggerConvoyThreat | TriggerHasMined | TriggerHasMines | TriggerMineThreat | TriggerHasMilitaryIndustrialOrganization | TriggerStockpileRatio | TriggerHasEquipment | TriggerHasAnyLicense | TriggerIsLicensingAnyTo | TriggerIsLicensingTo | TriggerHasLicense | TriggerFuelRatio | TriggerHasFuel | TriggerHasDesignBasedOn | TriggerEstimatedIntelMaxPiercing | TriggerEstimatedIntelMaxArmor | TriggerCompareIntelWith | TriggerIntelLevelOver | TriggerHasIntelligenceAgency | TriggerNetworkNationalCoverage | TriggerNetworkStrength | TriggerHasDoneAgencyUpgrade | TriggerAgencyUpgradeNumber | TriggerDecryptionProgress | TriggerHasCapturedOperative | TriggerHasFinishedCollectingForOperation | TriggerIsPreparingOperation | TriggerIsRunningOperation | TriggerNumFinishedOperations | TriggerHasOperationToken | TriggerIsActiveDecryptionBonusesEnabled | TriggerIsCryptologyDepartmentActive | TriggerIsDecrypting | TriggerIsFullyDecrypted | TriggerNumFakeIntelDivisions | TriggerNumFreeOperativeSlots | TriggerNumOperativeSlots | TriggerNumOfOperatives | TriggerAiIrrationality | TriggerAiLiberateDesire | TriggerAiHasRoleDivision | TriggerAiHasRoleTemplate | TriggerAiWantsDivisions | TriggerHasTemplateAiMajorityUnit | TriggerCanBeCountryLeader | TriggerHasCharacter | TriggerHasCountryLeader | TriggerHasCountryLeaderIdeology | TriggerHasCountryLeaderWithTrait | TriggerIsFemale | TriggerHasUnitLeader | TriggerHasScientistSpecialization | TriggerPcIsWinner | TriggerPcIsOnWinningSide | TriggerPcIsLoser | TriggerPcIsUntouchedLoser | TriggerPcIsOnSameSideAs | TriggerPcIsLiberated | TriggerPcIsLiberatedBy | TriggerPcIsPuppeted | TriggerPcIsPuppetedBy | TriggerPcIsForcedGovernment | TriggerPcIsForcedGovernmentBy | TriggerPcIsForcedGovernmentTo | TriggerPcTotalScore | TriggerPcCurrentScore | TriggerState | TriggerRegion | TriggerFreeBuildingSlots | TriggerNonDamagedBuildingLevel | TriggerAnyProvinceBuildingLevel | TriggerHasStateFlag | TriggerStatePopulation | TriggerStatePopulationK | TriggerIsCapital | TriggerIsControlledBy | TriggerIsFullyControlledBy | TriggerIsOwnedBy | TriggerIsClaimedBy | TriggerIsCoreOf | TriggerIsOwnedAndControlledBy | TriggerIsDemilitarizedZone | TriggerIsBorderConflict | TriggerIsInHomeArea | TriggerIsCoastal | TriggerIsOneStateIsland | TriggerIsIslandState | TriggerIsOnContinent | TriggerImpassable | TriggerHasStateCategory | TriggerStateStrategicValue | TriggerStateAndTerrainStrategicValue | TriggerNumOwnedNeighbourStates | TriggerDistanceTo | TriggerShipsInArea | TriggerResourceCountTrigger | TriggerHasResourcesAmount | TriggerDaysSinceLastStrategicBombing | TriggerHasRailwayConnection | TriggerCanBuildRailway | TriggerHasRailwayLevel | TriggerPcDoesStateStackDemilitarized | TriggerPcDoesStateStackDismantled | TriggerPcIsStateClaimed | TriggerPcIsStateClaimedBy | TriggerPcIsStateClaimedAndTakenBy | TriggerPcIsStateOutsideInfluenceForWinner | TriggerPcTurn | TriggerCanConstructBuilding | TriggerCompliance | TriggerComplianceSpeed | TriggerHasActiveResistance | TriggerHasResistance | TriggerResistance | TriggerResistanceSpeed | TriggerResistanceTarget | TriggerHasOccupationModifier | TriggerOccupiedCountryTag | TriggerIsCharacter | TriggerIsCountryLeader | TriggerIsUnitLeader | TriggerIsAdvisor | TriggerIsAirChief | TriggerIsArmyChief | TriggerIsArmyLeader | TriggerIsNavyChief | TriggerIsNavyLeader | TriggerIsHighCommand | TriggerIsCorpsCommander | TriggerIsOperative | TriggerIsPoliticalAdvisor | TriggerIsTheorist | TriggerIsCharacterSlot | TriggerHasAirLedger | TriggerHasArmyLedger | TriggerHasNavyLedger | TriggerHasCharacterFlag | TriggerHasTrait | TriggerHasId | TriggerIsHiredAsAdvisor | TriggerNotAlreadyHiredExceptAs | TriggerAdvisorCanBeFired | TriggerHasAdvisorRole | TriggerHasIdeology | TriggerHasIdeologyGroup | TriggerHasUnitLeaderFlag | TriggerIsLeadingArmy | TriggerIsLeadingArmyGroup | TriggerIsLeadingVolunteerGroup | TriggerIsLeadingVolunteerGroupWithOriginalCountry | TriggerIsFieldMarshal | TriggerIsAssigned | TriggerCanSelectTrait | TriggerHasAbility | TriggerSkill | TriggerSkillAdvantage | TriggerPlanningSkillLevel | TriggerLogisticsSkillLevel | TriggerDefenseSkillLevel | TriggerAttackSkillLevel | TriggerAverageStats | TriggerIsBorderWar | TriggerNumUnits | TriggerIsExiledLeader | TriggerIsExiledLeaderFrom | TriggerHasNationality | TriggerIsOperativeCaptured | TriggerOperativeLeaderMission | TriggerOperativeLeaderOperation | TriggerHasScientistLevel | TriggerIsActiveScientist | TriggerIsScientistInjured | TriggerHardness | TriggerArmor | TriggerDigIn | TriggerMinPlanning | TriggerFastestUnit | TriggerTemperature | TriggerReserves | TriggerHasCombatModifier | TriggerIsFightingInTerrain | TriggerIsFightingInWeather | TriggerPhase | TriggerReconAdvantage | TriggerNight | TriggerFrontageFull | TriggerHasFlankedOpponent | TriggerHasMaxPlanning | TriggerHasReserves | TriggerIsAmphibiousInvasion | TriggerIsAttacker | TriggerIsDefender | TriggerIsWinning | TriggerIsFightingAirUnits | TriggerLessCombatWidthThanOpponent | TriggerHasCarrierAirwingsOnMission | TriggerHasCarrierAirwingsInOwnCombat | TriggerHasArtilleryRatio | TriggerHasUnitType | TriggerDivisionHasMajorityTemplate | TriggerDivisionHasBattalionInTemplate | TriggerUnitStrength | TriggerUnitOrganisation | TriggerIsUnitTemplateReserves | TriggerIsMilitaryIndustrialOrganization | TriggerIsMioVisible | TriggerIsMioAvailable | TriggerIsMioAssignedToTask | TriggerHasMioSize | TriggerHasMioTrait | TriggerIsMioTraitAvailable | TriggerIsMioTraitCompleted | TriggerHasMioNumberOfCompletedTraits | TriggerHasMioFlag | TriggerHasMioPolicy | TriggerHasMioPolicyActive | TriggerHasMioResearchCategory | TriggerHasMioEquipmentType | TriggerContractContainsEquipment | TriggerDealCompletion | TriggerSeller | TriggerBuyer | TriggerHasProjectFlag;
