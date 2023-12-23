#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var random_1 = require("random");
//import seedrandom from "seedrandom";
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var enmies, maxEnemyHealth, enemyAttackDamage, health, attackDamage, numHealthPotions, healthPotionHealAmount, healthPotionDropChance, running, enimyHealth, enemy, menuItem_1, input_1, damageDealt, damageTaken, menuItem, input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    enmies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
                    maxEnemyHealth = 75;
                    enemyAttackDamage = 25;
                    health = 100;
                    attackDamage = 50;
                    numHealthPotions = 3;
                    healthPotionHealAmount = 30;
                    healthPotionDropChance = 50;
                    running = true;
                    console.log("Welcome to the Dungeon!");
                    _a.label = 1;
                case 1:
                    if (!running) return [3 /*break*/, 8];
                    console.log("------------------------------------------------");
                    enimyHealth = random_1.default.integer(0, maxEnemyHealth);
                    enemy = enmies[random_1.default.integer(0, (enmies.length - 1))];
                    console.log("\t# ".concat(enemy, " has appeared! #\n"));
                    if (!(health > 1)) return [3 /*break*/, 5];
                    _a.label = 2;
                case 2:
                    if (!(enimyHealth > 0)) return [3 /*break*/, 4];
                    console.log("\tYour HP ".concat(health));
                    console.log("\t".concat(enemy, "'s HP: ").concat(enimyHealth));
                    menuItem_1 = ["1. Attack", "2. Dronk Health Potion", "3. Run!", "4. Exit Dungeon"];
                    return [4 /*yield*/, getUserInput(menuItem_1)];
                case 3:
                    input_1 = _a.sent();
                    switch (input_1) {
                        case "1. Attack": {
                            damageDealt = random_1.default.integer(0, attackDamage);
                            damageTaken = random_1.default.integer(0, enemyAttackDamage);
                            enimyHealth -= damageDealt;
                            health -= damageTaken;
                            console.log("\t> You strike the ".concat(enemy, " for ").concat(damageDealt, " damage."));
                            console.log("\t> you receive ".concat(damageTaken, " in retaliation."));
                            if (health < 1) {
                                console.log("\t> You have taken too much damage, you are too weak to go on!");
                            }
                            break;
                        }
                        case "2. Dronk Health Potion": {
                            if (numHealthPotions > 0) {
                                health += healthPotionHealAmount;
                                numHealthPotions--;
                                console.log("\t> You drink a health potion healing yourself for ".concat(healthPotionHealAmount, ".\n                                            \t> You now have ").concat(health, " HP.\n                                            \t> You have ").concat(numHealthPotions, " left.\n"));
                            }
                            else {
                                console.log("\t> You have no health potions left!. Defeat enemies for a chance to get one.");
                            }
                            break;
                        }
                        case "3. Run!": {
                            console.log("\t> You run away from ".concat(enemy, "!"));
                            return [3 /*break*/, 1];
                        }
                        default: {
                            running = false;
                            return [3 /*break*/, 1];
                        }
                    }
                    return [3 /*break*/, 2];
                case 4: return [3 /*break*/, 6];
                case 5:
                    running = false;
                    console.log("\t> You limp out of the Dungeon!, weak from health.");
                    return [3 /*break*/, 1];
                case 6:
                    console.log("------------------------------------------------");
                    console.log(" # ".concat(enemy, " was defeated! #"));
                    console.log(" # You have ".concat(health, " HP left. #"));
                    if (random_1.default.integer(0, 100) < healthPotionDropChance) {
                        numHealthPotions++;
                        console.log(" # The ".concat(enemy, " dropped a health potion."));
                        console.log(" # You now have ".concat(numHealthPotions, " health potion(s). #"));
                    }
                    menuItem = ["1. Constinue Fighting", "2. Exit Dungeon"];
                    return [4 /*yield*/, getUserInput(menuItem)];
                case 7:
                    input = _a.sent();
                    switch (input) {
                        case "1. Constinue Fighting": {
                            return [3 /*break*/, 1];
                        }
                        default: {
                            running = false;
                            return [3 /*break*/, 1];
                        }
                    }
                    return [3 /*break*/, 1];
                case 8:
                    console.log("#############################");
                    console.log("#     Thanks for Palying    #");
                    console.log("#############################");
                    return [2 /*return*/];
            }
        });
    });
}
function getUserInput(menuItem) {
    return __awaiter(this, void 0, void 0, function () {
        var answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: "list",
                            name: "usrin",
                            choices: menuItem,
                            message: "What would you like to do? "
                        }
                    ])];
                case 1:
                    answer = _a.sent();
                    return [2 /*return*/, answer.usrin];
            }
        });
    });
}
main();
