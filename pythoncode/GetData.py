from sbp.client.drivers.pyserial_driver import PySerialDriver
from sbp.client import Handler, Framer
from sbp.navigation import SBP_MSG_BASELINE_NED, SBP_MSG_POS_LLH
import argparse
import requests

def main():
    endpoint_url = "http://127.0.0.1:4733/upload_coordinates"
    parser = argparse.ArgumentParser(
        description="Swift Navigation SBP Example.")
    parser.add_argument(
        "-p",
        "--port",
        default=['/dev/cu.usbmodem141401'],
        nargs=1,
        help="specify the serial port to use.")
    args = parser.parse_args()

    # Open a connection to Piksi using the default baud rate (1Mbaud)
    with PySerialDriver(args.port[0], baud=1000000) as driver:
        with Handler(Framer(driver.read, None, verbose=True)) as source:
            try:
                for msg, metadata in source.filter(SBP_MSG_POS_LLH):
                    # Print out the N, E, D coordinates of the baseline
                    print("%.4f,%.4f" % (msg.lat, msg.lon))
                    response = requests.post(endpoint_url, json={'lat': msg.lat, 'lon': msg.lon})

            except KeyboardInterrupt:
                pass


if __name__ == "__main__":
    main()