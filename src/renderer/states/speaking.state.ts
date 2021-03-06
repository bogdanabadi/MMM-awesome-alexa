import { IStateMachineComponents } from "./alexa-state-machine";
import { State } from "./base.state";

export class SpeakingState extends State {

    constructor(components: IStateMachineComponents) {
        super(components, "speaking");
    }

    public onEnter(): void {
        // this.components.visualizer.play(this.components.avs.Avs.player._currentSource);
        // this.components.visualizer.play(this.components.avs.Source);

        this.components.avs.stopRecording().then(() => {
            this.transition(this.allowedStateTransitions.get("idle"));
        });
    }

    public onExit(): void {
        // Clean up
    }

    public broadcast(type: NotificationType, data: any): void {
        // cancel speaking + go back to listening?
        // Or do nothing
    }
}
