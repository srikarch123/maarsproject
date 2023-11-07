from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
app = Flask(__name__)
CORS(app)

# Create a data structure to store the uploaded coordinates
coordinates = []
singleCoordinate=[{"lat":40.846915,"lon":-96.465946,"height":341.00}]

@app.route('/upload_coordinates', methods=['POST'])
def upload_coordinates():
    data = request.get_json()
    if 'lat' in data and 'lon' in data and 'height' in data:
        latitude = data['lat']
        longitude = data['lon']
        height=data['height']
        coordinates.append({'lat': latitude, 'lon': longitude,'height':height})
        singleCoordinate.clear()
        singleCoordinate.append({'lat': latitude, 'lon': longitude,'height':height})
        return jsonify({'message': 'Coordinates uploaded successfully'})
    else:
        return jsonify({'error': 'Invalid data format'}), 400

@app.route('/get_coordinates', methods=['GET'])
def get_coordinates():
    data = {'coordinates': coordinates}
    return jsonify(data)


@app.route('/get_single_coordinate', methods=['GET'])
def get_single_coordinate():
    data1 = {'coordinates': singleCoordinate}
    return jsonify(data1)


if __name__ == '__main__':
    app.run(debug=True,port=4756)
