# Created by wang.zy at 2015/10/12
import calendar, datetime, json


def outputJSON(obj):
    """Default JSON serializer."""

    if isinstance(obj, datetime.datetime):
        if obj.utcoffset() is not None:
            obj = obj - obj.utcoffset()

        return obj.strftime('%Y-%m-%d %H:%M:%S.%f')
    return str(obj)


def inputJSON(obj):
    newDic = {}

    for key in obj:
        try:
            if float(key) == int(float(key)):
                newKey = int(key)
            else:
                newKey = float(key)

            newDic[newKey] = obj[key]
            continue
        except ValueError:
            pass

        try:
            newDic[str(key)] = datetime.datetime.strptime(obj[key], '%Y-%m-%d %H:%M:%S.%f')
            continue
        except TypeError:
            pass

        newDic[str(key)] = obj[key]

    return newDic
