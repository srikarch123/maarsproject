from flask import Flask, request, jsonify
import requests
app = Flask(__name__)

# Create a data structure to store the uploaded coordinates
coordinates = []


@app.route('/upload_coordinates', methods=['POST'])
def upload_coordinates():
    data = request.get_json()
    if 'lat' in data and 'lon' in data:
        latitude = data['lat']
        longitude = data['lon']
        coordinates.append({'lat': latitude, 'lon': longitude})
        return jsonify({'message': 'Coordinates uploaded successfully'})
    else:
        return jsonify({'error': 'Invalid data format'}), 400

@app.route('/get_coordinates', methods=['GET'])
def get_coordinates():
    return jsonify(coordinates)

# Define a custom function to get coordinates without making an HTTP request
def custom_get_coordinates():
    return coordinates

if __name__ == '__main__':
    app.run(debug=True,port=4733)
