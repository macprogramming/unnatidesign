const Colors = () => {
    return(
        <>
            <div className="row px-md-5" id="Styles">
                <div className="col-12 text-center">
                    <h3 className="m-0 playfair-display">Trending Fabric & Color Combinations</h3>
                    <small className="popins">Explore the divers range of embroidery style that make Aari work unique and vwesatile</small>
                </div>
            </div>
            <div className="row row-cols-1 px-md-5 row-cols-sm-2 row-cols-md-4 my-5">
                <div className="col mh-100">
                    <div className="card h-100 border-0 shadow-sm text-center">
                        <div className="w-25 h-25 bg-primary rounded-circle m-auto my-4 p-5"></div>
                        <div className="card-body">
                            <h5 className="card-title popins m-0">Gold Thread</h5>
                            <small className="card-text popins">On red,navy,black</small>
                        </div>
                    </div>
                </div>
                <div className="col mh-100">
                    <div className="card h-100 border-0 shadow-sm text-center">
                        <div className="w-25 h-25 bg-primary rounded-circle m-auto my-4 p-5"></div>
                        <div className="card-body">
                            <h5 className="card-title m-0">Deep Red</h5>
                            <small className="card-text">With silver & pearis</small>
                        </div>
                    </div>
                </div>
                <div className="col mh-100">
                    <div className="card h-100 border-0 shadow-sm text-center">
                        <div className="w-25 h-25 bg-primary rounded-circle m-auto my-4 p-5"></div>
                        <div className="card-body">
                            <h5 className="card-title m-0">Earth Tones</h5>
                            <small className="card-text">With mirror work</small>
                        </div>
                    </div>
                </div>
                <div className="col mh-100">
                    <div className="card h-100 border-0 shadow-sm text-center">
                        <div className="w-25 h-25 bg-primary rounded-circle m-auto my-4 p-5"></div>
                        <div className="card-body">
                            <h5 className="card-title m-0">Pastel Shades</h5>
                            <small className="card-text">Delicate thread work</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Colors;