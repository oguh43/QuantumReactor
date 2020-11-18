if (typeof(require) !== "undefined"){
    ["power/legacy_battery","distribution/titanium_bridge"].forEach(element => {
       require(element) 
    });
}