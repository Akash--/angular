import { ChangeDetectorJITGenerator } from './change_detection_jit_generator';
export class JitProtoChangeDetector {
    constructor(definition) {
        this.definition = definition;
        this._factory = this._createFactory(definition);
    }
    static isSupported() { return true; }
    instantiate() { return this._factory(); }
    /** @internal */
    _createFactory(definition) {
        return new ChangeDetectorJITGenerator(definition, 'util', 'AbstractChangeDetector', 'ChangeDetectorStatus')
            .generate();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaml0X3Byb3RvX2NoYW5nZV9kZXRlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtbGgwZFV3VlMudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vaml0X3Byb3RvX2NoYW5nZV9kZXRlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FJTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sa0NBQWtDO0FBRTNFO0lBSUUsWUFBb0IsVUFBb0M7UUFBcEMsZUFBVSxHQUFWLFVBQVUsQ0FBMEI7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxPQUFPLFdBQVcsS0FBYyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU5QyxXQUFXLEtBQXFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXpELGdCQUFnQjtJQUNoQixjQUFjLENBQUMsVUFBb0M7UUFDakQsTUFBTSxDQUFDLElBQUksMEJBQTBCLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSx3QkFBd0IsRUFDNUMsc0JBQXNCLENBQUM7YUFDeEQsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztBQUNILENBQUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGlzdFdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcblxuaW1wb3J0IHtQcm90b0NoYW5nZURldGVjdG9yLCBDaGFuZ2VEZXRlY3RvciwgQ2hhbmdlRGV0ZWN0b3JEZWZpbml0aW9ufSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvckpJVEdlbmVyYXRvcn0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uX2ppdF9nZW5lcmF0b3InO1xuXG5leHBvcnQgY2xhc3MgSml0UHJvdG9DaGFuZ2VEZXRlY3RvciBpbXBsZW1lbnRzIFByb3RvQ2hhbmdlRGV0ZWN0b3Ige1xuICAvKiogQGludGVybmFsICovXG4gIF9mYWN0b3J5OiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlZmluaXRpb246IENoYW5nZURldGVjdG9yRGVmaW5pdGlvbikge1xuICAgIHRoaXMuX2ZhY3RvcnkgPSB0aGlzLl9jcmVhdGVGYWN0b3J5KGRlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGlzU3VwcG9ydGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxuXG4gIGluc3RhbnRpYXRlKCk6IENoYW5nZURldGVjdG9yIHsgcmV0dXJuIHRoaXMuX2ZhY3RvcnkoKTsgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2NyZWF0ZUZhY3RvcnkoZGVmaW5pdGlvbjogQ2hhbmdlRGV0ZWN0b3JEZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRlY3RvckpJVEdlbmVyYXRvcihkZWZpbml0aW9uLCAndXRpbCcsICdBYnN0cmFjdENoYW5nZURldGVjdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDaGFuZ2VEZXRlY3RvclN0YXR1cycpXG4gICAgICAgIC5nZW5lcmF0ZSgpO1xuICB9XG59XG4iXX0=