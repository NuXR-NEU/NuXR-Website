import React, {
    useRef,
    useState,
    forwardRef,
    useCallback,
    useImperativeHandle,
    useEffect
    } from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    timeout,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    DiamondPlugin,
    FrameFadePlugin,
    GLTFAnimationPlugin,
    GroundPlugin,
    BloomPlugin,
    TemporalAAPlugin,
    AnisotropyPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
  //  ITexture, TweakpaneUiPlugin, AssetManagerBasicPopupPlugin, 
    CanvasSnipperPlugin,
    mobileAndTabletCheck,
    // IViewerPlugin,
    // Color, // Import THREE.js internals
    // Texture, // Import THREE.js internals
} from "webgi";
import gsap from "gsap"; //For animating
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = forwardRef((props, ref) =>
{
    const canvasRef = useRef(null);
    const [viewerRef, setViewerRef] = useState(null);
    const [targetRef, setTargetRef] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [positionRef, setPositionRef] = useState(null);
    const canvasContainerRef = useRef(null);
    const [previewMode, setPreviewMode] = useState(false);
    const [isMobile, setIsMobile] = useState(null);

    const memoizedScrollAnimation = useCallback(
        (position, target, isMobile, onUpdate) => {
            if( position && target && onUpdate)
            {
                scrollAnimation(position, target, isMobile, onUpdate);
            }
        }, []
    );

    const setupViewer = useCallback( async() =>
    {

        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })
        setViewerRef(viewer);

        const isMobileOrTablet = mobileAndTabletCheck();
        setIsMobile(isMobileOrTablet); 
        // Add some plugins
        const manager = await viewer.addPlugin(AssetManagerPlugin)
        
        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;
        setCameraRef(camera);
        setTargetRef(target);
        setPositionRef(position);
        // Add a popup(in HTML) with download progress when any asset is downloading.
        // await viewer.addPlugin(AssetManagerBasicPopupPlugin)
    
        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        // await viewer.addPlugin(DiamondPlugin)
        // await viewer.addPlugin(FrameFadePlugin)
        // await viewer.addPlugin(GLTFAnimationPlugin)
        // await viewer.addPlugin(GroundPlugin)
         await viewer.addPlugin(BloomPlugin)
        // await viewer.addPlugin(TemporalAAPlugin)
        // await viewer.addPlugin(AnisotropyPlugin)
        // and many more...
    
        // or use this to add all main ones at once.
        await addBasePlugins(viewer)
    
        // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
        await viewer.addPlugin(CanvasSnipperPlugin)
    
        // This must be called once after all plugins are added.
        viewer.renderer.refreshPipeline()
    
        // Import and add a GLB file.
        await manager.addFromPath("scened.glb")

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
        
        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled : false});
        
        if(isMobileOrTablet)
        {
            position.set(-16.7, 1.17, 11.7);
            target.set(0, 1.37, 0);
            props.contentRef.current.className = "mobile-or-tablet";

        }
        
        window.scrollTo(0, 0);

        let needsUpdate = true;

        const onUpdate = () => {
            needsUpdate = true;
           // console.log(" mOving to  something ");
            viewer.setDirty();
        }

        viewer.addEventListener("preFrame", () => {
            if(needsUpdate)
            {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        });

        memoizedScrollAnimation(position, target, isMobile, onUpdate);
        // Load an environment map if not set in the glb file
        // await viewer.setEnvironmentMap((await manager.importer!.importSinglePath<ITexture>("./assets/environment.hdr"))!);
    
        // Add some UI for tweak and testing.
        //const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin)
        // Add plugins to the UI to see their settings.
        //uiPlugin.setupPlugins<IViewerPlugin>(TonemapPlugin, CanvasSnipperPlugin)
    
    }, []);
   
    useEffect(() => {
        setupViewer();
    }, []);

    return (
        <div ref={canvasContainerRef} id="webgi-canvas-container">
            <canvas id="webgi-canvas" ref={canvasRef}/>
            {
                previewMode && (
                    <button className="button" onClick={handleOnExit}>Exit</button>
                )

            }
        </div>
    );
}
)

export default WebgiViewer;
